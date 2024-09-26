"use client"
import { createContext, Dispatch, SetStateAction, useState } from "react";

type CreditContextProps={
    creditBalances:number,
    updateCreditBalances:(balance: number) => void
}

export const CreditContext=createContext<CreditContextProps>({} as CreditContextProps);

const CreditProvider=({children}:{children:React.ReactNode})=>{
    
    const [creditBalances, setCreditBalances] = useState(0)
    const updateCreditBalances=(balance:number)=>{
        setCreditBalances(balance)
    }
    
    return (
        
        <CreditContext.Provider value={{creditBalances,updateCreditBalances}}>
            {children}
        </CreditContext.Provider>
    )
}

export default CreditProvider