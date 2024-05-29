const FormChild=(props)=>{
    const {parentHeight,labelName,inputHeight,inputName}=props.css
    const parentcss=`flex flex-col  relative w-[472px] ${parentHeight}`
    const childcss=`border border-black rounded-lg ${inputHeight} p-4`
    return(
        <div className={parentcss}>
                    <label className="absolute top-[-10px] left-6 bg-white px-2 text-sm font-semibold" htmlFor='name'>{labelName}</label>
                    <input className={childcss} type="text" name={inputName}/>
                </div>
    )
}
export default FormChild;