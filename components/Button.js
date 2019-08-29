import React, { Component } from 'react';
import Link from 'next/link';

export default function Button(props){
    return (
      <React.Fragment>
        <Link href={props.url}>
          <a className={(props.success)? "Button success": "Button"} target="_blank">
            {props.text}
          </a>
        </Link>
        <style jsx>{`
          .Button {
            display: inline-block;
            padding: 12px;
            font-size: 18px;
            color: white;
            text-decoration: none;
            background-color: #c9c9c9;
            margin-right: 12px;
            border-radius: 6px;
          }
          .Button.success {
            background-color: #92eed2;
          }
        `}</style>
      </React.Fragment>
    );
}