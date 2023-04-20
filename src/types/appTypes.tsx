export interface IContactState {
  id: string,
  name: string,
  number:string
}
export interface IFormSubmit {
 
  name: string,
  number:string
}
export interface IContactFormProps{
  onSubmit:(contact:IFormSubmit)=>void
}

export interface IFilter{
  value: string,
  onChange:(e:React.ChangeEvent<HTMLInputElement>)=>void
}

export interface IContactList{
  contacts: IContactState[],
  onDelete:(id:string)=>void
}
export interface IContactListItem{
  key:string,
  name:string,
  number:string,
  onClick:React.MouseEventHandler<HTMLButtonElement>
}