"use client"

import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { categoryColors } from '@/data/categories'
import { format } from 'date-fns'
import { Clock } from 'lucide-react'
//import { ChevronDown, ChevronUp } from 'lucide-react'
import React from 'react'

const TransactionTable = ({ transactions }) => {
    const filterAndSortedTransactions = transactions;

    const handleSort = () => {}


  return (
    <div className="space-y-4">
      {/* Filters */}
      {/* Transactions Table */}
      <div className="rounded-md border">
      <Table>        
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">
                <Checkbox />
            </TableHead>
            <TableHead className="cursor-pointer"
             onClick={() => handleSort('date')}>
                <div className="flex items-center">
                  Date
                  
                </div>
            </TableHead>
            <TableHead className="">
                Description
            </TableHead>
            <TableHead className="cursor-pointer"
             onClick={() => handleSort('category')}>
                <div className="flex items-center">
                  Category
                  
                </div>
            </TableHead>
            <TableHead className="cursor-pointer"
             onClick={() => handleSort('amount')}>
                <div className="flex items-center justify-end">
                  Amount
                  
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
                            <Checkbox />
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
                              <TooltipTrigger>Hover</TooltipTrigger>
                              <TooltipContent>
                                <p>Add to library</p>
                              </TooltipContent>
                            </Tooltip>
                            </TooltipProvider>
                            ): ( <Badge variant="outline" className="gap-1">
                                <Clock className='h-3 w-3'/> One-time</Badge>)}</TableCell>
                                               
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
