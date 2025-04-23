export type RootStackParamList = {
    Dashboard: undefined;
    Proof: undefined;
    Login: undefined;
    Rewards: { 
      userCoins: number; 
      rewards: { name: string; cost: number }[]; 
    };
    Goal: undefined;
  };
  