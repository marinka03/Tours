import React from 'react';
import clsx from 'clsx';
import style from '../footer/Footer.module.css';

const Footer = ({ currentTheme }) => {
  // console.log('hello from footer', currentTheme);
  return (
    <footer className={clsx(style.footer, {
      [style.dark]: currentTheme === 'dark',
      [style.light]: currentTheme === 'light',
    })}>
      Footer
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
        molestias fugit, corporis eum hic adipisci, harum deleniti officia
        soluta dolore eius aliquid, ipsam fuga! Ab quibusdam quos cupiditate
        expedita temporibus.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas animi
        aliquam consequatur voluptatem repudiandae quod a, laboriosam recusandae
        dignissimos quaerat corrupti vero, molestiae expedita at error quasi
        eligendi? Voluptatum, maiores! Eos velit adipisci laborum vel ex! Iste,
        natus fugit in quis totam voluptatum voluptatem tempora nesciunt iusto
        ipsam alias voluptates delectus cum quisquam tempore vel ut nostrum
        voluptatibus eligendi blanditiis. Quas corrupti omnis fugiat nostrum
        natus in culpa porro, exercitationem explicabo! Iure, magnam
        necessitatibus provident ullam quibusdam soluta. At magnam ab
        repudiandae autem voluptate doloribus impedit facilis eos soluta
        assumenda. Ex ratione sunt optio! Blanditiis, doloribus! Eos eum
        consequatur voluptas, est consectetur nulla cupiditate praesentium esse
        quibusdam aliquam beatae quaerat, corrupti omnis eius numquam ipsam
        officia quae excepturi laboriosam magni! Accusantium asperiores deserunt
        laboriosam odio, aut quis beatae cupiditate, harum qui at sapiente culpa
        assumenda repellendus neque ratione ut soluta pariatur provident quas id
        rerum nemo tempore itaque dolore! Rerum.
      </p>
    </footer>
  );
};

export default Footer;
