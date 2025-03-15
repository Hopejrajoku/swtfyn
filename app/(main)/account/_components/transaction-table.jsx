"use client"

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { categoryColors } from '@/data/categories'
import { format } from 'date-fns'
import { Clock, MoreHorizontal, RefreshCw, Search, ChevronDown, ChevronUp, Trash } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'


const RECURRING_INTERVALS = {
    DAILY: "Daily",
    WEEKLY: "Weekly",
    MONTHLY: "Monthly",
    YEARLY: "Yearly",
  };


const TransactionTable = ({ transactions }) => {

    const router = useRouter();
    const [selectedIds, setSelectedIds] = useState([]);
    const [sortConfig, setSortConfig] = useState({
        field: "date",
        direction: "desc",
      });


    const filterAndSortedTransactions = transactions;

    const [searchTerm, setSearchTerm] = useState("");
    const [typeFilter, setTypeFilter] = useState("");
    const [recurringFilter, setRecurringFilter] = useState("");

    const handleSort = (field) => {
        setSortConfig((current) => ({
          field,
          direction:
            current.field === field && current.direction === "asc" ? "desc" : "asc",
        }));
      };
    
    const handleSelect = (id) => {
    setSelectedIds((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
    };
    
    const handleSelectAll = () => {
        setSelectedIds((current) =>
          current.length === filterAndSortedTransactions.length
            ? []
            : filterAndSortedTransactions.map((t) => t.id)
        );
      };

      const handleBulkDelete = async () => {
        if (
          !window.confirm(
            `Are you sure you want to delete ${selectedIds.length} transactions?`
          )
        )
          return;
    
        deleteFn(selectedIds);
      };


  return (
    <div className="space-y-4">
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
            placeholder="Search transactions..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="pl-8"
          />
        </div>
        <div className="flex gap-2">
        <Select
            value={typeFilter}
            onValueChange={(value) => {
              setTypeFilter(value);
              setCurrentPage(1);
            }}
          >
            <SelectTrigger className="w-[130px]">
              <SelectValue placeholder="All Types" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="INCOME">Income</SelectItem>
              <SelectItem value="EXPENSE">Expense</SelectItem>
            </SelectContent>
          </Select>

          <Select
            value={recurringFilter}
            onValueChange={(value) => {
              setRecurringFilter(value);
              
            }}
          >
            <SelectTrigger className="w-[130px]">
              <SelectValue placeholder="All Transactions" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recurring">Recurring Only</SelectItem>
              <SelectItem value="non-recurring">Non-recurring Only</SelectItem>
            </SelectContent>
          </Select>
          {selectedIds.length > 0 && (
            <div className="flex items-center gap-2">
              <Button
                variant="destructive"
                size="sm"
                onClick={handleBulkDelete}
              >
                <Trash className="h-4 w-4 mr-2" />
                Delete Selected ({selectedIds.length})
              </Button>
            </div>
          )}          
        </div>
      </div>
      {/* Transactions Table */}
      <div className="rounded-md border">
      <Table>        
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">
                <Checkbox
                checked={
                    selectedIds.length === filterAndSortedTransactions.length &&
                    filterAndSortedTransactions.length > 0
                  }
                  onCheckedChange={handleSelectAll} 
                />
            </TableHead>
            <TableHead className="cursor-pointer"
             onClick={() => handleSort('date')}>
                <div className="flex items-center">
                  Date 
                  {sortConfig.field === "date" &&
                    (sortConfig.direction === "asc" ? (
                      <ChevronUp className="ml-1 h-4 w-4" />
                    ) : (
                      <ChevronDown className="ml-1 h-4 w-4" />
                    ))}
                  
                </div>
            </TableHead>
            <TableHead className="">
                Description
            </TableHead>
            <TableHead className="cursor-pointer"
             onClick={() => handleSort('category')}>
                <div className="flex items-center">
                  Category
                  {sortConfig.field === "category" &&
                    (sortConfig.direction === "asc" ? (
                      <ChevronUp className="ml-1 h-4 w-4" />
                    ) : (
                      <ChevronDown className="ml-1 h-4 w-4" />
                    ))}
                  
                </div>
            </TableHead>
            <TableHead className="cursor-pointer"
             onClick={() => handleSort('amount')}>
                <div className="flex items-center justify-end">
                  Amount
                  {sortConfig.field === "amount" &&
                    (sortConfig.direction === "asc" ? (
                      <ChevronUp className="ml-1 h-4 w-4" />
                    ) : (
                      <ChevronDown className="ml-1 h-4 w-4" />
                    ))}
                  
                </div>
            </TableHead>
            <TableHead>Recurring</TableHead>
            <TableHead className="w-[50px]" />
          </TableRow>
        </TableHeader>
        <TableBody>
            {filterAndSortedTransactions.length === 0? (
                <TableRow>
                    <TableCell colSpan={7} className="text-center text-muted-foreground">No transactions found</TableCell>
                </TableRow>
            ) : (
                filterAndSortedTransactions.map(transaction => (
                    <TableRow key={transaction.id}>
                        <TableCell>
                            <Checkbox
                            checked={selectedIds.includes(transaction.id)}
                            onCheckedChange={() => handleSelect(transaction.id)}
                             />
                        </TableCell>
                        <TableCell>{format(new Date(transaction.date), "PP")}</TableCell>
                        <TableCell>{transaction.description}</TableCell>
                        <TableCell className="capitalize"
                        >
                            <span style={{ backgroundColor: categoryColors[transaction.category] }}
                            className="px-2 py-1 text-xs rounded text-white">
                            {transaction.category}
                            </span>
                        </TableCell>
                        <TableCell className="text-right font-medium"
                        style={{ color: transaction.type === 'EXPENSE'? 'red': 'green' }}>
                            {transaction.tye === 'EXPENSE'? '-': '+'}
                            ${transaction.amount.toFixed(2)}
                        </TableCell>
                        <TableCell>{transaction.isRecurring?(
                            <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                              <Badge
                              variant="secondary"
                              className="gap-1 bg-purple-100 text-purple-700 hover:bg-purple-200"
                            >
                              <RefreshCw className="h-3 w-3" />
                              {
                                RECURRING_INTERVALS[
                                  transaction.recurringInterval
                                ]
                              }
                            </Badge>
                              </TooltipTrigger>
                              <TooltipContent>
                              <div className="text-sm">
                              <div className="font-medium">Next Date:</div>
                              <div>
                                {format(
                                  new Date(transaction.nextRecurringDate),
                                  "PPP"
                                )}
                              </div>
                            </div>
                              </TooltipContent>
                            </Tooltip>
                            </TooltipProvider>
                            ): (
                                <Badge variant="outline" className="gap-1">
                                  <Clock className="h-3 w-3" />
                                  One-time
                                </Badge>
                              )}
                            </TableCell>

                    <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          onClick={() =>
                            router.push(
                              `/transaction/create?edit=${transaction.id}`
                            )
                          }
                        >
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          className="text-destructive"
                          //onClick={() => deleteFn([transaction.id])}
                        >
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                                               
                    </TableRow>
                ))
            )}
          
        </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default TransactionTable
