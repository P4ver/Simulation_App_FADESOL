import React from 'react'
import diswatt from './style/diswatt.png'

const Footer = () => {
  return (
<footer class="bg-gray-50">
  <div class="mx-auto grid max-w-screen-xl gap-y-8 gap-x-12 px-4 py-10 md:grid-cols-2 xl:grid-cols-4 xl:px-10">
    <div class="">
        <div className='w-28'>
            <a href="https://www.diswatt.ma/" target="_blank">
                <img src={diswatt} alt="" className=''/>
            </a>
        </div>
      <div class="mt-4 mb-2 font-medium xl:mb-4">Siege</div>
      <div class="text-gray-500">
      17, rue Montmartre – Belvèdère – Casablanca <br />
      (212) 666 55 21 93 <br />
      (212) 522 24 75 84 <br />
      contact@diswatt.com
      </div>
    </div>
    <div class="">
      <div class="mt-4 mb-2 font-bold text-lg xl:mb-4">Show Room</div>
      <div class="text-gray-500">
      Immeuble FADESOL POWER SOLUTIONS <br />
      57, Lotissement Banam, la Gracieuse Q.I Bernoussi – <br />
      Casablanca <br />
      Tel : +212 522 24 66 90/70/71<br />
      Fax : +212 522 40 92 04
      </div>
    </div>
    <div class="">
      <div class="mt-4 mb-2 font-bold xl:mb-4">Menu</div>
      <nav aria-label="Footer Navigation" class="text-gray-500">
        <ul class="space-y-3">
          <li><a class="hover:text-blue-600 hover:underline" href="https://www.diswatt.ma/" target='_blank'>Accueil</a></li>
          <li><a class="hover:text-blue-600 hover:underline" href="https://www.diswatt.ma/about" target='_blank'>A propos</a></li>
          <li><a class="hover:text-blue-600 hover:underline" href="https://www.diswatt.ma/contact" target='_blank'>Contact</a></li>
          <li><a class="hover:text-blue-600 hover:underline" href="https://www.diswatt.ma/terms-and-conditions" target='_blank'>Termes et Conditions</a></li>
          <li><a class="hover:text-blue-600 hover:underline" href="https://www.diswatt.ma/my-account" target='_blank'>Mon compte</a></li>
          <li><a class="hover:text-blue-600 hover:underline" href="https://www.diswatt.ma/track-your-order" target='_blank'>Suivis de colis</a></li>
        </ul>
      </nav>
    </div>
    <div class="">
      <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d32705.089101249607!2d-7.504085000000001!3d33.620305!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cb0011ccc9c7%3A0xa7b36b7d3033b168!2sDiswatt%20Showroom!5e1!3m2!1sen!2sma!4v1720603887097!5m2!1sen!2sma"
          width="350"
          height="240"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
        ></iframe>
    </div>
  </div>
  <div class="bg-gray-100">
    <div class="mx-auto flex max-w-screen-xl flex-col gap-y-4 px-4 py-3 text-center text-gray-500 sm:flex-row sm:justify-between sm:text-left">
      <div class="">© 2024 Diswatt | All Rights Reserved</div>
      <div class="">
        
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer
