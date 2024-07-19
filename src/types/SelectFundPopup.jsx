import React, { useState } from 'react';
import { useFetchFundTransactionsFund1, useFetchFundTransactionsFund2 ,  useFetchFundTransactions} from '../Hooks/FundHooks';
import data from '../main/selectfund.json';


const SelectFundPopup = (props) => {

  const [inputText, setInputText] = useState();
  const [selectedInput, setSelectedInput] = useState();
  //    const [filteredData, setFilteredData] = useState({});

  const { data1 } = useFetchFundTransactionsFund1();
  
  const { data2 } = useFetchFundTransactionsFund2();

  const handleSearchInput = (e) => {
    setInputText(e.target.value.toLowerCase())
  }

  const filteredData = data.filter((el) => {
    if (inputText === '')
      return data;
    else
      return el.text.toLowerCase().includes(inputText);
  })

  const handleSelectedInput = (text) => {
    setSelectedInput(text)
    props.setCurrentSelectedFund(text)
    
    if(text === 'Fund-1')
    {
      props.setFundData(data1)
    }
    else if( text === 'Fund-2'){
      props.setFundData( data2)
    }
    else{
      props.setFundData( data1)
    }
    // console.log("selected input", text)

  }

  return (
    <div style={{ padding: '15px 3%' }}>
      <h5 style={{ fontFamily: 'Inter', fontStyle: 'normal', fontWeight: '700', fontSize: '18px', 
        lineHeight: '22px', color: '#21234A', marginBottom: '1.3rem'}}>Select Fund</h5>
      <div style={{ position: 'relative' }}>
        <input className="search-fund-textbox" type="text" placeholder="Search fund"
          onChange={handleSearchInput} style={{ width: '100%', position: 'static', paddingLeft: '40px' }}
        /> {/*	&#x1F50E; search icon */}
        <i className="fa fa-search search-icon" aria-hidden="true" style={{}}></i>
      </div>
      <p style={{ marginTop: '1rem', color: '#21234A', fontWeight: '500', fontSize: '14px', lineHeight: '17px' }}>Favorites</p>
      <div style={{width: '100%', overflowX: 'auto'}}>
        <ul className="fav-list">
          {data.map(({ id, text }) => (
            // {console.log({li})}
            <li className="li-items" key={id}>
              <p style={{width: 'max-content'}}>
                <i className="fa fa-star pe-2" aria-hidden="true"></i>{text}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <hr />
      <p> Available inputs</p>
      <ul className="search-list" style={{ height: 'auto', position: 'static', marginBottom: 'auto', width: '100%' }} 
      >
        {filteredData.map(({ id, text }) => (
          // {console.log({li})}
          <li onClick = {()=>handleSelectedInput(text)} className="li-items" key={id} ><span> ☆&nbsp;{text}</span></li>
        ))}
      </ul>
      {
        !inputText &&
        <ul className="search-list" style={{ height: 'auto', position: 'static', width: '100%', padding: '0px' }}>
          {data.map(({ id, text }) => (
            // {console.log({li})}
            <li onClick = {(e)=>handleSelectedInput(text)} className="li-items" key={id} 
            style={{ width: '100%' ,  background : (selectedInput === text ) ? 'rgb(252, 240, 253)' : ''}}>
              <span>☆&nbsp;{text}</span></li>
          ))}
        </ul>
      }

    </div>  

  )
}

export default SelectFundPopup;