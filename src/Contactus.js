import './Contactus.css'
import React from 'react'
export default function Contactus() {
    return (
        <div>
            <div className='contact-us'>
                <h2 className='c-title'>تواصل معنا</h2>
            </div>
            <div className='type-m'>
                <select className='type'>
                    <option value="Choose" >أختر نوع الرسالة</option>
                    <option value="complaint">شكوى</option>
                    <option value="suggestion">اقتراح</option>
                    <option value="query">استفسار</option>
                </select>
            </div>
            <input type="text" className=" type-m title-m" placeholder="عنوان الرسالة" />
            <input type="text" className=" type-m title-m" placeholder="الإيميل" />          
            <input type="text" className="message" placeholder="الرسالة" />

            <button className='send-m'>إرسال</button>

        </div>
    )
}