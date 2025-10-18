import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'

const Datacontext = createContext()
 function Context({children}) {

 const [AppData,SetAppData] = useState(()=>{
  const saved = localStorage.getItem("Data")
  return saved ?
  JSON.parse(saved) 
  :
   {
    Transaction:[],
    DarkMode:false,
    Currency:"USD"
  } 
 }
  
 )
 const [TotalIncom,SerTotalIncom]=useState(0);
 const [Totalexp,SetTotalexp] =useState(0);
 const [Balance,setBalance] = useState(0)
 const [SortBy,SetSortBy] = useState("date")
 const SortedList = AppData.Transaction.length > 0 ? Sorted(AppData.Transaction) : []
const Values = {
    USD: "$",
    INR: "₹",
    EUR: "€",
    GBP: "£"
}

 function HandleToggle(){
  SetAppData((prev)=> ({...prev,DarkMode:!prev.DarkMode}))
 }
 function Sorted(Data){
  const SortedItems = [...Data].sort((a,b)=>{
    switch (SortBy) {
      case "date":
        return new Date(a.date) - new Date(b.date);
      case "category":
        return a.category.localeCompare(b.category);
      case "amount":
        return a.amount - b.amount;
      case "type":
        return b.type.localeCompare(a.type)
      default:return 0;
    }
  })
  return SortedItems
 }

useEffect(()=>{
  localStorage.setItem("Data",JSON.stringify(AppData))
},[AppData])
 useEffect(()=>{
  //  const incomeCat = Transaction.filter((item)=> item.type === "income")
  //  const expenseCat = Transaction.filter((item)=> item.type === "expense")
   const {incomeCat,expenseCat} = AppData.Transaction.reduce((acc,item)=> 
   {
    if(item.type === "Expense") 
      {

        acc.expenseCat.unshift(item)
          console.log("Unshifting to expenseCat:", item);
      }
    else{
       acc.incomeCat.unshift(item)
        console.log("Unshifting to incomeCat:", item)
      }
    return acc
   },{incomeCat:[],expenseCat:[]}
  )
    const x = incomeCat.reduce((acc,curr)=>acc + Number(curr.amount),0)
    const y = expenseCat.reduce((acc,curr)=>acc + Number(curr.amount),0)
    SerTotalIncom(x)
    SetTotalexp(y)
    setBalance(x-y)
   console.log("Income",TotalIncom)
  console.log("Expense",Totalexp)

 },[AppData.Transaction])
const initialState = {
  amount: '',
  category: '',
  date: '',
  notes: '',
  type: 'Expense',
}

const HandleChange = (e)=>{
    const {name,value} = e.target
    dispatch({type:"UpdateFields",field:name,value})
}
const HandleSubmit = (e)=>{
  e.preventDefault()
  const newList = {...state,ID:Date.now()}
  SetAppData((prev)=>({...prev,Transaction:[...prev.Transaction,newList]}))
  dispatch({type:"Reset"})
}

const HandleClear=()=>{
  dispatch({type:"Reset"})
}
const HandleDelete=(data)=>{
  const UpdateData = AppData.Transaction.filter((item)=> item.ID !== data.ID) 
  SetAppData((prev)=> ({...prev,Transaction:UpdateData}))
}
function Reducer(state,action){
  switch (action.type) {
    case "UpdateFields":
      return {...state,[action.field]:action.value}
    case "Reset":
      return initialState

  }
}



const [state,dispatch]= useReducer(Reducer,initialState)
  return (
    <Datacontext.Provider value={{Transaction:AppData.Transaction,HandleChange,HandleDelete,state,HandleSubmit,HandleClear,TotalIncom,Totalexp,Balance,SortedList,SetSortBy,SortBy,DarkMode:AppData.DarkMode,HandleToggle, CurrencySymbol: Values[AppData.Currency],SetAppData,AppData}}>
      {children}
    </Datacontext.Provider>
  )
}
const useData = ()=>{
  const cont = useContext(Datacontext)
  return cont
}
export {Context,useData}
