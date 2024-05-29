const CustomButton=(props)=>{
    const {width,height,bgColor,textColor,text,imgSrc,toAddBorder}=props.css
     const borderclass=toAddBorder?"border-black border":"";
     const classButtoncss=`flex items-center justify-center font-semibold text-base rounded-lg p-3 ${width} ${height} ${bgColor} ${textColor} ${borderclass}`
    return (
        <button className={classButtoncss}>
        <img src={imgSrc} className='mr-2'></img>
        {text}</button>
    )
}
export default CustomButton;