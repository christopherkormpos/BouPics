import React from 'react'
import "./Footer.css";

function Footer() {
    return (
        <footer>
            <div class="footer">
                <div class="row">
                    <a href="/"><i class="fa fa-facebook"></i></a>
                    <a href="/"><i class="fa fa-instagram"></i></a>
                    <a href="/"><i class="fa fa-linkedin"></i></a>
                    <a href="/"><i class="fa fa-envelope"></i></a>
                </div>

                <div class="row">
                    <ul>
                        <li><a href="/">Contact us</a></li>
                        <li><a href="/">Our Services</a></li>
                        <li><a href="/">Privacy Policy</a></li>
                        <li><a href="/">Terms & Conditions</a></li>
                    </ul>
                </div>

                <div class="row">
                    Copyright © 2024 BouPics - All rights reserved || Powered by <a href="https://www.linkedin.com/in/christopher-kormpos-27808b194/" target="_blank" rel="noreferrer" className='chris'>Christopher Kormpos</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
