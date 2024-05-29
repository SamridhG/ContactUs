import service from '../../textures/Service_24_7.svg'
import chat from '../../textures/chat_icon.png'
import chatblack from '../../textures/chat-black.png'
import call from '../../textures/call_icon.png'
import CustomButton from './CustomButton'
import FormChild from './FormChild'
const Contact=()=>{
    return (
        <div className="w-10/12 m-auto flex">
         <div className="w-1/2 flex flex-col gap-8 justify-center">
          <div className='flex gap-8'>
            <CustomButton css={{width:"w-[220px]", heigh:"h-[44px]", bgColor:"bg-black", textColor:"text-white", text:"VIA SUPPORT CHAT", imgSrc:chat,toAddBorder:false }}/>
            <CustomButton css={{width:"w-[220px]" ,height:"h-[44px]", bgColor:"bg-black" ,textColor:"text-white", text:"VIA CALL" ,imgSrc:call ,toAddBorder:false}}/>
          </div>
          <div>
          <CustomButton css={{width:"w-[472px]", height:"h-[44px]", bgColor:"bg-white" ,textColor:"text-black" ,text:"VIA EMAIL FORM" ,imgSrc:chatblack, toAddBorder:true}}/>
          </div>
          <div>
            <form className='flex flex-col gap-7 w-[472px]'>
                {/* {parentHeight,labelName,inputHeight,inputName} */}
                <FormChild css={{parentHeight:"h-[50px]",labelName:"NAME",inputHeight:"h-[40px]",inputName:"NAME"}}/>
                <FormChild css={{parentHeight:"h-[50px]",labelName:"E-MAIL",inputHeight:"h-[40px]",inputName:"E-MAIL"}}/>
                <FormChild css={{parentHeight:"h-[130px]",labelName:"TEXT",inputHeight:"h-[120px]",inputName:"TEXT"}}/>
                <div className='flex justify-end'><CustomButton  css={{width:"w-[220px]", heigh:"h-[24px]", bgColor:"bg-black", textColor:"text-white", text:"SUBMIT", imgSrc:chat,toAddBorder:false }}/></div>
            </form>
          </div>
    
         </div>
         <div className="w-1/2">
            <img src={service}></img>
         </div>
        </div>
    )
}
export default Contact