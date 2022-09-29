import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/indra.jpg'
import AVTR2 from '../../assets/papa.jpg'
import AVTR3 from '../../assets/razan.jpg'
import AVTR4 from '../../assets/eki.jpg'
// import AVTR5 from '../../assets/avatar5.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//Data Images
const data = [
  {
    avatar: AVTR1,
    name: 'Indra',
    review: 'Pernah kesulitan dalam menyelesaikan tugas, tetapi dengan konsultasi pada mas Agna saya sangat merasa terbantu, saya pernah dibantu menyelesaikan tugas C++ dan solusi yang diberikan sungguh mudah dicerna serta dipelajari.'
  },
  {
    avatar: AVTR2,
    name: 'Agus Susilo',
    review: 'Untuk menggapai customer sebanyak-banyaknya, perusahaan kami meminta untuk dibuatkan sebuah situs E-Commerce yang dimana kita bisa menjual produk cetakan secara online. Situs yang dibuatkan cukup bagus dan di situs tersebut terdapat bagian admin yang berguna untuk mengatur pembelian barang serta customer.'
  },
  {
    avatar: AVTR3,
    name: 'Razan',
    review: 'Sempat kebingungan belajar bahasa pemrograman PHP sendirian, pada waktu saya belajar bareng sama mas Agna saya lebih memahami dengan mudah.'
  },
  {
    avatar: AVTR4,
    name: 'Eki',
    review: 'Saya tidak punya basic pada ilmu pemrograman, hal itulah yang menjadikan ketertarikan saya dalam konsultasi dengan mas Agna. Dengan metode belajar yang mudah dimengerti saya dapat memiliki ilmu dasar pemrograman yang nantinya membantu saya dalam menyelesaikan tugas.'
  },
  // {
  //   avatar: AVTR5,
  //   name: 'Agung',
  //   review: 'Pembuatan '
  // }
]

const Testimonials = () => {
  return (
    <section id='testimonials' className='section__testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {
          data.map(({ avatar, name, review, }, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials