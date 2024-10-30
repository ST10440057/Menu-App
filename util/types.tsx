// types.ts

export type RootStackParamList = {
    Home: undefined;
    ChefScreen: undefined;
    LoginScreen: undefined;
    MenuScreen: { customerId: number };
    EditItemScreen:undefined;
    CustomerScreen:undefined;
    AddItemScreen:undefined;
    
  };
  export type DishItem = {
    name: string;
    course: string;
    description: string;
    price: number;
    customerId: number;
 
  };
  export const customers = [
    { id: 1, name: "Customer 1" },
    { id: 2, name: "Customer 2" },
    { id: 3, name: "Customer 3" },
  ] as const;

  
  