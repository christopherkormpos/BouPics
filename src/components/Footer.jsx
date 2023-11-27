import React from 'react'
import "./Footer.css";

export default function Footer() {
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
                        <li><a href="/portfolio">Portfolio</a></li>
                        <li><a href="/contact">Contact us</a></li>
                        <li><a href="/privacypolicy">Privacy Policy</a></li>
                    </ul>
                </div>

                <div class="row">
                    <p>
                        Copyright © 2024 BouPics - All rights reserved || <p className='powered'>Powered by <a href="https://www.linkedin.com/in/christopher-kormpos-27808b194/" target="_blank" rel="noreferrer" className='chris'>Christopher Kormpos</a>
                        </p>
                        </p>
                </div>
            </div>
        </footer>
    )
}


