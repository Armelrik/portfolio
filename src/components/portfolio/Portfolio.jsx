import React, { useEffect, useState } from 'react'
import './Portfolio.css';
import {List, contentPortfolio, designPortfolio, featuredPortfolio, mlPortfolio, mobilePortfolio, webPortfolio} from './List';
import PortfolioList from '../portfolioList/PortfolioList';

function Portfolio() {

  const [selected, setSelected] = useState('featured');
  const [data, setData] = useState([]);

  useEffect(() => {
    /* if(selected === "featured") {
      setData(featuredPortfolio);
    } else {
      if(selected === "web"){
        setData(webPortfolio);
      } else {
        if(selected === 'mobile'){
          setData(mobilePortfolio);
        } else {
          if(selected === 'design'){
            setData(designPortfolio);
          } else {
            if(selected === 'content'){
              setData(contentPortfolio);
            } else {
              if(selected === 'ml'){
                setData(mlPortfolio);
              } else {
                setData(featuredPortfolio)
              }
            }
          }
        }
      }
    } */

    switch(selected) {
      case 'featured': setData(featuredPortfolio); break;
      case 'web': setData(webPortfolio); break;
      case 'mobile': setData(mobilePortfolio); break;
      case 'design': setData(designPortfolio); break;
      case 'content': setData(contentPortfolio); break;
      case 'ml': setData(mlPortfolio); break;
      default: setData(featuredPortfolio);

    }

  }, [selected])
  
  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {List.map(item=>(
          <PortfolioList 
            title={item.title}
            id={item.id} 
            active={selected === item.id}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <div className="port_container">
        {data.map( d => (
          <div className="port_item">
            <img src={d.img} alt={d.title} />
            <h3>{d.title}</h3>
          </div>
        ))}
        
      </div>
    </div>
  )
}

export default Portfolio;
