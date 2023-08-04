import PrivateHeader from '@/components/header/PrivateHeader';
import { faAngleDown, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useState } from 'react'
import { faXTwitter, faFacebook, faInstagram, faGoogle, faWhatsapp, faReddit, faQuora } from '@fortawesome/free-brands-svg-icons'
import { Popover } from 'react-tiny-popover';

function NewStory() {
    const [title, setTitle] = useState("")
    const [article, setArticle] = useState("")
    const [image, setImage] = useState(undefined)
    const [links, setLinks] = useState([{ iconName: "twitter", label: "Twitter", link: "https://twitter.com" }])
    const [popoverOpenStatus, setPopoverOpenStatus] = useState([false]);
    const imageRef = useRef(null);

    const addNewLink = (index) => {
        var temp = [...links];
        temp.push({ label: "", link: "", iconName: "" })
        popoverOpenStatus.splice(index, 0, true)
        setLinks(temp)
        setPopoverOpenStatus(popoverOpenStatus)
    }
    const handleImage = (e) => {
        setImage(e.target.files[0])
    }
    
    console.log(image);

    return <>
        <PrivateHeader hasNewStory={true} />
        <section className='mx-auto w-[80vw]'>
            <input placeholder='Title' className=' my-4 rounded-lg p-3 border-2 w-full  focus:outline-none' value={title} onChange={(e => setTitle(e.target.value))} type='text' />
            <textarea value={article} onChange={(e => setArticle(e.target.value))} rows={15} className='rounded-lg p-3 border-2 my-4  w-full  focus:outline-none' placeholder='Write your story...'></textarea>
            <div className='flex flex-wrap items-center gap-2 my-6'>
                {links && links.map((item, i) => {
                    return (<div key={`link-${i}`} className='flex items-center border-2 rounded'>
                        <Popover isOpen={popoverOpenStatus[i]} onClickOutside={() => {
                            let temp = [...popoverOpenStatus];
                            temp[i] = false;
                            setPopoverOpenStatus(temp)
                        }} positions={['top']} content={
                            <div className='grid grid-cols-3 bottom-10 shadow-md rounded bg-white p-2 gap-2'>
                                <FontAwesomeIcon onClick={e => {
                                    var temp = [...links];
                                    temp[i].iconName = "facebook";
                                    setLinks(temp);
                                }} className='text-blue-700 ' size='lg' icon={faFacebook} />
                                <FontAwesomeIcon onClick={e => {
                                    var temp = [...links];
                                    temp[i].iconName = "twitter";
                                    setLinks(temp);
                                }} className='text-black ' size='lg' icon={faXTwitter} />
                                <FontAwesomeIcon onClick={e => {
                                    var temp = [...links];
                                    temp[i].iconName = "instagram";
                                    setLinks(temp);
                                }} className='text-red-700 ' size='lg' icon={faInstagram} />
                                <FontAwesomeIcon onClick={e => {
                                    var temp = [...links];
                                    temp[i].iconName = "google";
                                    setLinks(temp);
                                }} className='text-orange-700 ' size='lg' icon={faGoogle} />
                                <FontAwesomeIcon onClick={e => {
                                    var temp = [...links];
                                    temp[i].iconName = "whatsapp";
                                    setLinks(temp);
                                }} className='text-green-700 ' size='lg' icon={faWhatsapp} />
                                <FontAwesomeIcon onClick={e => {
                                    var temp = [...links];
                                    temp[i].iconName = "reddit";
                                    setLinks(temp);
                                }} className='text-red-700 ' size='lg' icon={faReddit} />
                                <FontAwesomeIcon onClick={e => {
                                    var temp = [...links];
                                    temp[i].iconName = "quora";
                                    setLinks(temp);
                                }} className='text-red-700 ' size='lg' icon={faQuora} />
                            </div>
                        }>
                            <div className={" cursor-default p-3 bg-gray-200"} onClick={(e) => {
                                let temp = [...popoverOpenStatus];
                                temp[i] = !temp[i];
                                setPopoverOpenStatus(temp)
                            }} >

                                <FontAwesomeIcon icon={links[i].iconName === "twitter" ? faXTwitter : links[i].iconName === "reddit" ? faReddit : links[i].iconName === "whatsapp" ? faWhatsapp : links[i].iconName === "facebook" ? faFacebook : links[i].iconName === "quora" ? faQuora : links[i].iconName === "google" ? faGoogle : links[i].iconName === "instagram" ? faInstagram : ""} />
                                &nbsp;
                                &nbsp;
                                <FontAwesomeIcon className=' ' icon={faAngleDown} />
                            </div>
                        </Popover>

                        <input type='url' value={item.link} onChange={(e) => {
                            console.log(e.target.value);
                            var temp = [...links];
                            temp[i].link = e.target.value;
                            setLinks(temp);
                        }} className='border-none w-48 p-2 text-gray-600 focus:outline-none' />
                    </div>);
                })}
                <FontAwesomeIcon onClick={addNewLink} icon={faPlus} className='cursor-pointer bg-black p-2 rounded-full' color='white' />
            </div>
            <input accept=".jpg,.jpeg,.png,.gif,.webp" className='my-5' type='file' onChange={handleImage} ref={imageRef} />
        </section>
    </>;
}

export default NewStory