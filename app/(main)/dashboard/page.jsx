//import { Suspense } from "react";
import { getUserAccounts } from "@/actions/dashboard";
//import { getDashboardData } from "@/actions/dashboard";
//import { getCurrentBudget } from "@/actions/budget";
//import { AccountCard } from "./_components/account-card";
import { CreateAccountDrawer } from "@/components/create-account-drawer";
//import { BudgetProgress } from "./_components/budget-progress";
import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";
import AccountCard from "./_components/account-card";
//import { DashboardOverview } from "./_components/transaction-overview";

export default async function DashboardPage() {
  const accounts = await getUserAccounts();

  return (
    <div className="space-y-8">
      
      {/* Dashboard Overview */}
      

      {/* Accounts Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <CreateAccountDrawer>
          <Card className="hover:shadow-md transition-shadow cursor-pointer border-dashed">
            <CardContent className="flex flex-col items-center justify-center text-muted-foreground h-full pt-5">
              <Plus className="h-10 w-10 mb-2" />
              <p className="text-sm font-medium">Add New Account</p>
            </CardContent>
          </Card>
        </CreateAccountDrawer>
        {accounts.length > 0 && accounts?.map((account) => {
            return <AccountCard  key={account.id} account={account}/> ;
        })}
      </div>
    </div>
  );
}