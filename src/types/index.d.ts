interface MainState {
  balance: number;
}

interface Transaction {
  amount: number;
  details: TransactionDetail
}

interface TransactionDetail {
  image?: string;
  name: string;
  description: string;
}
