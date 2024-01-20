import  React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;

const SignInPage = () => {
    const history = useHistory();
    const [passwordShown, setPasswordShown] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const togglePasswordVisibility = () => {
        setPasswordShown(passwordShown ? false : true);
    };
    const handleLogin = () =>{
        const payload = {email, password}
    }
    const handleNavigateToRegister = () => {
        history.push('/register')
    }
{/* <a href="" className='text-[14px] cursor-pointer underline underline-offset-4 decoration-[#FFC804]'>個人情報保護方針</a> */}
    return (
        <>
            <div className= 'w-full h-[900px] bg-image-blur bg-cover'></div>
            <div className= 'absolute flex flex-col items-center top-[20%] left-[35%] w-[550px] h-[640px] bg-black/50 z-10 border-white border-2 rounded-lg'>
                <h1 className='text-[28px] text-white font-semibold pt-[40px]'>ログイン</h1>
                <form className='flex flex-col items-center flex-wrap w-[70%]' onSubmit={handleLogin()} >
                    <div className='flex flex-col w-full'>
                        <label htmlFor="" className='text-white font-normal mb-1 mt-5 text-[20px]'>メール</label>
                        <input
                            className='h-[35px] rounded-md' 
                            type="text"
                            id="email"
                            name="emailname"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='relative flex flex-col w-full'>
                        <label htmlFor="" className='text-white font-normal mb-1 mt-7 text-[20px]'>パスワード<br /><span className='text-[14px] leading-[2px]'>登録済みのパスワードをご入力ください。</span><br /></label>
                        <input
                            className='h-[35px] rounded-md'
                            type={passwordShown ? "text" : "password"}
                            id="password"
                            name="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <i className='absolute bottom-1 right-3 cursor-pointer' onClick={togglePasswordVisibility}>{eye}</i>
                    </div>
                    <p className='text-white mt-10'>アカウント作成と同時に、当サイトの および個人情報保護方針プライバシーポリシーに同意したとみなされます。</p> 
                    <button className='mt-10 w-full h-[50px] rounded-md bg-[#2A6484] text-white font-semibold border-white/50 border-2 text-[22px]' onSubmit={handleLogin}>ログイン </button>
                    <button className='mt-6 w-full h-[50px] rounded-md bg-[#2A6484] text-white font-semibold border-white/50 border-2 text-[19px]' onClick={handleNavigateToRegister}>サインアップページに移動 </button>
                </form>
            </div>
        </>
    )
}

export default SignInPage;