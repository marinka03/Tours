import React from 'react';
import clsx from 'clsx';
import style from '../footer/_Footer.module.scss';

const Footer = ({ currentTheme }) => {
  return (
    <footer
      className={clsx(style.footer, {
        [style.dark]: currentTheme === 'dark',
        [style.light]: currentTheme === 'light',
      })}
    >
      <div className={style.container}>
        Footer
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
          molestias fugit, corporis eum hic adipisci, harum deleniti officia
          soluta dolore eius aliquid, ipsam fuga! Ab quibusdam quos cupiditate
          expedita temporibus.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          animi aliquam consequatur voluptatem repudiandae quod a, laboriosam
          recusandae dignissimos quaerat corrupti vero, molestiae expedita at
          error quasi eligendi? Voluptatum, maiores! Eos velit adipisci laborum
          vel ex! Iste, natus fugit in quis totam voluptatum voluptatem tempora
          nesciunt iusto ipsam alias voluptates delectus cum quisquam tempore
          vel ut nostrum voluptatibus eligendi blanditiis. Quas corrupti omnis
          fugiat nostrum natus in culpa porro, exercitationem explicabo! Iure,
        </p>
      </div>
    </footer>
  );
};

export default Footer;
