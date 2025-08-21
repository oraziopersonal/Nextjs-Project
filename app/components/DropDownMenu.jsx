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
    <divclassName={"dropdown text-center"} ref={munuref}>
      <button className={btn "btn-dropdown dropdown-toggle"}
        onClick={() => setisAperto(!isAperto)}
        >MENU >></button>
      {isAperto && (
      <ul className={"link-list"}>
        <li className={"dropdown-item list-item"}><a href="/home">HOME</li>
        <li  className={"dropdown-item list-item"}><a href="/esperienze di lavoro">WORK</li>
        <li  className={"dropdown-item list-item"}><a href="/formazione">FORMAZIONE</li>
        <li  className={"dropdown-item list-item"}><a href="/passioni">PASSIONI</li>
        <li  className={"dropdown-item list-item"}><a href="/contatti"></li>
      </ul>
          )}
    </div>
          );
}
