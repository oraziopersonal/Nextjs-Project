'use client'
import styles from './DropdownMenu.modules.css';
import { useState, useEffect, useRef } from 'react';
export defautl function IlMioMenu() {
  const [isAperto, setisAperto] = useState(false);
  const munuRef = useRef(null);
    useEffect(() => { 
      function CliccamiFuori(event) {
        if (munuRef.current && !munuRef.current.contents(event.target)) {
          setisAperto(false);
        }
      }
      documenmt.addEventListner('mousedown', CliccamiFuori);
      return () => document.removeEventListener('mousedown', CliccamiFuori);
    }, []);

  return ( 
    <div className={styles.dropdown} ref={munuref}>
      <button className={styles.button}
        onClick={() => setisAperto(!isAperto)}
        >MENU >></button>
      {isAperto && (
      <ul className={styles.menu}>
        <li><a href="/home">HOME</li>
        <li><a href="/esperienze di lavoro">WORK</li>
        <li><a href="/formazione">FORMAZIONE</li>
        <li><a href="/passioni">PASSIONI</li>
        <li><a href="/contatti"></li>
      </ul>
          )}
    </div>
          );
}
