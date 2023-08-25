import React from 'react';
import './App.css';
import { useState, useEffect, useRef } from 'react';
import logo from './images/Group.png'
import vektor from './images/Vector.png'
import prev from './images/Vector-prev.png'
import icon from './images/Frame-1.png'
import useOnClickOutside from './useOnClickOutside'
import data from './data.json'
import Case from './Case';
import OfficeContent from './OfficeContent'
import Dil from './DIl'
import DizaynContent from './DizaynContent';


function App() {

  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  
  const handleClick = () => {
    setShowContent(!showContent);
  };
  
  useOnClickOutside(ref, () => {
  setShowContent(false);
  });
///
  const refOffice = useRef()
  useOnClickOutside(refOffice, () => {
  setShowOfficeCon(false);
  });

  const refDil = useRef()

  useOnClickOutside(refDil, () => {
  setShowDilCon(false);
  });

  const refDizayn = useRef()

  useOnClickOutside(refDizayn, () => {
    setShowDizaynCon(false);
  });
    
      
    const [showOffice, setShowOffice] = useState(false);
    const Office = () => {
      setShowOffice(!showOffice);
    };

    const [showProgram, setShowProgram] = useState(false);
  
    const Program = () => {
      setShowProgram(!showProgram);

    };
    const [showDizayn, setShowDizayn] = useState(false);
  
    const Dizayn = () => {
      setShowDizayn(!showDizayn);
    };
    const [showDiger, setShowDiger] = useState(false);
  
    const Diger = () => {
      setShowDiger(!showDiger);
    };

/// 
// office prog
  const [showOfficeCon, setShowOfficeCon] = useState(false);
    
  const selectOfficeProg = () => {
      setShowOfficeCon(!showOfficeCon);
  };
//
    const [showExcelCon, setShowExcelCon] = useState(false);
  
    const Excel = () => {
      setShowExcelCon(!showExcelCon);
    };
    
    const [showWordCon, setShowWordCon] = useState(false);
  
    const Word = () => {
      setShowWordCon(!showWordCon);
    };   
    
    const [showPowerCon, setShowPowerCon] = useState(false);
  
    const Power = () => {
      setShowPowerCon(!showPowerCon);
    };

    /// dil

    const [showDilCon, setShowDilCon] = useState(false);
      
    const DilClick = () => {
      setShowDilCon(!showDilCon);
    };
    const [showPythonCon, setShowPythonCon] = useState(false);
      
    const Python = () => {
      setShowPythonCon(!showPythonCon);
    };
    const [showJavaCon, setShowJavaCon] = useState(false);
      
    const Java = () => {
      setShowJavaCon(!showJavaCon);
    };
    const [showJavascriptCon, setShowJavacriptCon] = useState(false);
      
    const Javacript = () => {
      setShowJavacriptCon(!showJavascriptCon);
    };
    const [showCCon, setShowCCon] = useState(false);
      
    const C = () => {
      setShowCCon(!showCCon);
    };
    //dizayn
    const [showDizaynCon, setShowDizaynCon] = useState(false);
      
    const SelectDizaynClick = () => {
      setShowDizaynCon(!showDizaynCon);
    };
    const [showFigmaCon, setShowFigmaCon] = useState(false);
      
    const Figma = () => {
      setShowFigmaCon(!showFigmaCon);
    };
    const [showCanvaCon, setShowCanvaCon] = useState(false);
      
    const Canva = () => {
      setShowCanvaCon(!showCanvaCon);
    };
    const [showPhotoshopCon, setShowPhotoshopCon] = useState(false);
      
    const Photoshop = () => {
      setShowPhotoshopCon(!showPhotoshopCon);
    };
    //radio
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };
    const [selectedOption1, setSelectedOption1] = useState(null);

    const handleOptionChange1 = (event) => {
      setSelectedOption1(event.target.value);
    };
    const [selectedOption2, setSelectedOption2] = useState(null);

    const handleOptionChange2 = (event) => {
      setSelectedOption2(event.target.value);
    };
    const [selectedOption3, setSelectedOption3] = useState(null);

    const handleOptionChange3 = (event) => {
      setSelectedOption3(event.target.value);
    };
    const [selectedOption4, setSelectedOption4] = useState(null);

    const handleOptionChange4 = (event) => {
      setSelectedOption4(event.target.value);
    };
    const [selectedOption5, setSelectedOption5] = useState(null);

    const handleOptionChange5 = (event) => {
      setSelectedOption5(event.target.value);
    };
    const [selectedOption6, setSelectedOption6] = useState(null);

    const handleOptionChange6 = (event) => {
      setSelectedOption6(event.target.value);
    };
    const [selectedOption7, setSelectedOption7] = useState(null);

    const handleOptionChange7 = (event) => {
      setSelectedOption7(event.target.value);
    };
    const [selectedOption8, setSelectedOption8] = useState(null);

    const handleOptionChange8 = (event) => {
      setSelectedOption8(event.target.value);
    };
    const [selectedOption9, setSelectedOption9] = useState(null);

    const handleOptionChange9 = (event) => {
      setSelectedOption9(event.target.value);
    };
    //
    
  
  return (
    <div>
         <div className="app">
     <header className='header'>
     <div className='line-box'>
        <div className='line-1 line'></div>
        <div className='line-2 line'></div>
     </div>
      <div className='text-box'> 
      <img src={logo}></img>
      <p className='head'>Süni intelekt sistemi</p>
      <p className='text'>Bu formu doldurduqdan sonra öz yaşıdlarınız arasında ən yaxşı hansı faizlikdə olduğunuzu müəyyən edə biləcəksiniz.</p>
      </div>
     </header>
     <div className='form-box'>
      <div className='punk'>
        <div>Təhsil</div>
        <div>Dil Bilikləri</div>
        <div>Xüsusi bacarıqlar</div>
        <div>İdman</div>
        <div>İş təcrübəsi</div>
        <div className='selected'> <span className='select-num'>6.</span> Proqram bilikləri </div>
      </div>
      <div className='form'>
        <h2>Proqram bilikləri substage</h2>
        <div className='number'>1</div>
        <p className='question'>Hansı proqram növləri üzrə təcrübəniz var?*</p>
      <div className='dropdown'  ref={ref}>
        <div className='select' onClick={handleClick}>
        <Case
        showOffice={showOffice}
        showProgram={showProgram}
        showDizayn={showDizayn}
      />
          <img className={`vector ${showContent? 'vector-rotate' : ''}`} src={vektor}></img>
          </div>
        {/* {showContent && 
          <div className='dropdown-content'>
            {
              data.program_types.map(type => {
                return (
                  <a  key={type.key} className={`item ${showOffice ? 'active' : ''}`} onClick={Office} >{type.name} 
                    <div className={`circle ${showOffice ? 'circle-active' : ''}`} />
                  </a>
                )
              })
            }
          </div>
        } */}
        {showContent && 
        <div className='dropdown-content'>
          <a className={`item ${showOffice ? 'active' : ''}`} onClick={Office} >MS Office 
           <div className={`circle ${showOffice ? 'circle-active' : ''}`}></div></a>
          <a className={`item ${showProgram? 'active' : ''}`} onClick={Program} >Proqramlaşdırma dilləri 
           <div className={`circle ${showProgram ? 'circle-active' : ''}`}></div></a>
          <a className={`item ${showDizayn ? 'active' : ''}`} onClick={Dizayn} >Dizayn Proqramları 
           <div className={`circle ${showDizayn? 'circle-active' : ''}`}></div></a>
          <a className={`item ${showDiger ? 'active' : ''}`} onClick={Diger} >Digər növ proqramlar 
           <div className={`circle ${showDiger ? 'circle-active' : ''}`}></div></a>
        </div>}
      </div>
      <div className='scroll-box'>
      {showOffice && 
          <div>
            <p className='question'>Hansı MS Office proqramları üzrə təcrübəniz var?*</p>
            <div className='dropdown' ref={refOffice}>
        <div className='select' onClick={selectOfficeProg}>
        <OfficeContent
        showExcelCon={showExcelCon}
        showWordCon={showWordCon}
        showPowerCon={showPowerCon}
      />
        <img className={`vector ${showOfficeCon? 'vector-rotate' : ''}`} src={vektor}></img></div>
        {/* {showOfficeCon && 
        <div className='dropdown-content'>
            {
              data.program_types.map(type => {
                {
                  type.items.map((item => {
                    return (
                      <a key={type.key} className={`item ${showExcelCon ? 'active' : ''}`} onClick={Excel} >{item.name} 
                        <div className={`circle ${showExcelCon ? 'circle-active' : ''}`} />
                      </a>
                      
                    )
                  }))
                }
              })
            }
      </div>
        } */}
         {showOfficeCon && 
        <div className='dropdown-content'>
          <a className={`item ${showExcelCon ? 'active' : ''}`} onClick={Excel}>Excel
          <div className={`circle ${showExcelCon? 'circle-active' : ''}`}></div></a>
          <a className={`item ${showWordCon ? 'active' : ''}`}  onClick={Word}>Word
          <div className={`circle ${showWordCon? 'circle-active' : ''}`}></div></a>
          <a className={`item ${showPowerCon ? 'active' : ''}`} onClick={Power}>PowerPoint
          <div className={`circle ${showPowerCon? 'circle-active' : ''}`}></div></a>
        </div>
        }
         </div>
         {showExcelCon && 
         <div>
           <p className='question'>Excel programı üzrə təcrübənizi qeyd edin?*</p>
          <div className='radio'>
                <div className='radio-item'>
                <label>İlkin
                  <input
                      type="radio"
                      value="option1"
                      checked={selectedOption === 'option1'}
                      onChange={handleOptionChange}
                    />
                    
                  <div className="circle radio-circle"></div>
                  </label>
                  </div>
                <div className='radio-item'>
                <label>Orta
                    <input
                      type="radio"
                      value="option2"
                      checked={selectedOption === 'option2'}
                      onChange={handleOptionChange}
                    />
                     <div className="circle radio-circle"></div>
                  </label> 
                </div>
                <div className='radio-item'>
                <label>İrəli
                    <input
                      type="radio"
                      value="option3"
                      checked={selectedOption === 'option3'}
                      onChange={handleOptionChange}
                    />
                   <div className="circle radio-circle"></div>
                  </label> 
                </div>
          </div>
         </div>
          }
          {showWordCon &&
          <div>
            <p className='question'>Word programı üzrə təcrübənizi qeyd edin?*</p> 
          <div className='radio'>
          <div className='radio-item'>
                <label>İlkin
                  <input
                      type="radio"
                      value="option1"
                      checked={selectedOption1 === 'option1'}
                      onChange={handleOptionChange1}
                    />
                    
                  <div className="circle radio-circle"></div>
                  </label>
                  </div>
                <div className='radio-item'>
                <label>Orta
                    <input
                      type="radio"
                      value="option2"
                      checked={selectedOption1 === 'option2'}
                      onChange={handleOptionChange1}
                    />
                     <div className="circle radio-circle"></div>
                  </label> 
                </div>
                <div className='radio-item'>
                <label>İrəli
                    <input
                      type="radio"
                      value="option3"
                      checked={selectedOption1 === 'option3'}
                      onChange={handleOptionChange1}
                    />
                   <div className="circle radio-circle"></div>
                  </label> 
                </div>
          </div>
          </div>          
          }
          {showPowerCon && 
          <div>
            <p className='question'>Power Point programı üzrə təcrübənizi qeyd edin?*</p>
            <div className='radio'>
            <div className='radio-item'>
                <label>İlkin
                  <input
                      type="radio"
                      value="option1"
                      checked={selectedOption2 === 'option1'}
                      onChange={handleOptionChange2}
                    />
                    
                  <div className="circle radio-circle"></div>
                  </label>
                  </div>
                <div className='radio-item'>
                <label>Orta
                    <input
                      type="radio"
                      value="option2"
                      checked={selectedOption2 === 'option2'}
                      onChange={handleOptionChange2}
                    />
                     <div className="circle radio-circle"></div>
                  </label> 
                </div>
                <div className='radio-item'>
                <label>İrəli
                    <input
                      type="radio"
                      value="option3"
                      checked={selectedOption2 === 'option3'}
                      onChange={handleOptionChange2}
                    />
                   <div className="circle radio-circle"></div>
                  </label> 
                </div>
            </div>
          </div>
          }
          </div>
          }
            {showProgram && 
          <div>
            <p className='question'>Hansı proqramlaşdırma dillərini bilirsiniz?*</p>
            <div className='dropdown' ref={refDil}>
        <div className='select' onClick={DilClick}> 
        <Dil
        showPythonCon={showPythonCon}
        showJavaCon={showJavaCon}
        showJavascriptCon={showJavascriptCon}
        showCCon={showCCon}
      />
        <img className={`vector ${showDilCon? 'vector-rotate' : ''}`} src={vektor}></img></div>
        {showDilCon && 
        <div className='dropdown-content'>
          <a className={`item ${showPythonCon ? 'active' : ''}`} onClick={Python}>Python
          <div className={`circle ${showPythonCon ? 'circle-active' : ''}`}></div></a>
          <a className={`item ${showJavaCon ? 'active' : ''}`} onClick={Java}>Java
          <div className={`circle ${showJavaCon ? 'circle-active' : ''}`}></div></a>
          <a className={`item ${showJavascriptCon ? 'active' : ''}`} onClick={Javacript}>Javacript
          <div className={`circle ${showJavascriptCon ? 'circle-active' : ''}`}></div></a>
          {/* <a className={`item ${showCCon ? 'active' : ''}`} onClick={C}>C\C++
          <div className={`circle ${showCCon ? 'circle-active' : ''}`}></div></a> */}
        </div>
        }
      </div>
      {showPythonCon && 
         <div>
           <p className='question'>Python programı üzrə təcrübənizi qeyd edin?*</p>
          <div className='radio'>
          <div className='radio-item'>
                <label>İlkin
                  <input
                      type="radio"
                      value="option1"
                      checked={selectedOption3 === 'option1'}
                      onChange={handleOptionChange3}
                    />
                    
                  <div className="circle radio-circle"></div>
                  </label>
                  </div>
                <div className='radio-item'>
                <label>Orta
                    <input
                      type="radio"
                      value="option2"
                      checked={selectedOption3 === 'option2'}
                      onChange={handleOptionChange3}
                    />
                     <div className="circle radio-circle"></div>
                  </label> 
                </div>
                <div className='radio-item'>
                <label>İrəli
                    <input
                      type="radio"
                      value="option3"
                      checked={selectedOption3 === 'option3'}
                      onChange={handleOptionChange3}
                    />
                   <div className="circle radio-circle"></div>
                  </label> 
                </div>
          </div>
         </div>
          }
          {showJavaCon &&
          <div>
            <p className='question'>Java programı üzrə təcrübənizi qeyd edin?*</p> 
          <div className='radio'>
          <div className='radio-item'>
                <label>İlkin
                  <input
                      type="radio"
                      value="option1"
                      checked={selectedOption4 === 'option1'}
                      onChange={handleOptionChange4}
                    />
                    
                  <div className="circle radio-circle"></div>
                  </label>
                </div>
                <div className='radio-item'>
                <label>Orta
                    <input
                      type="radio"
                      value="option2"
                      checked={selectedOption4 === 'option2'}
                      onChange={handleOptionChange4}
                    />
                     <div className="circle radio-circle"></div>
                  </label> 
                </div>
                <div className='radio-item'>
                <label>İrəli
                    <input
                      type="radio"
                      value="option3"
                      checked={selectedOption4 === 'option3'}
                      onChange={handleOptionChange4}
                    />
                   <div className="circle radio-circle"></div>
                  </label> 
                </div>
          </div>
          </div>          }
          {showJavascriptCon && 
          <div>
            <p className='question'>Javacript programı üzrə təcrübənizi qeyd edin?*</p>
            <div className='radio'>
            <div className='radio-item'>
                <label>İlkin
                  <input
                      type="radio"
                      value="option1"
                      checked={selectedOption5 === 'option1'}
                      onChange={handleOptionChange5}
                    />
                    
                  <div className="circle radio-circle"></div>
                  </label>
                  </div>
                <div className='radio-item'>
                <label>Orta
                    <input
                      type="radio"
                      value="option2"
                      checked={selectedOption5 === 'option2'}
                      onChange={handleOptionChange5}
                    />
                     <div className="circle radio-circle"></div>
                  </label> 
                </div>
                <div className='radio-item'>
                <label>İrəli
                    <input
                      type="radio"
                      value="option3"
                      checked={selectedOption5 === 'option3'}
                      onChange={handleOptionChange5}
                    />
                   <div className="circle radio-circle"></div>
                  </label> 
                </div>
            </div>
          </div>
          }
            {showCCon && 
          <div>
            <p className='question'>C\C++ programı üzrə təcrübənizi qeyd edin?*</p>
            <div className='radio'>
            <div className='radio-item'>
                <label>İlkin
                  <input
                      type="radio"
                      value="option1"
                      checked={selectedOption6 === 'option1'}
                      onChange={handleOptionChange6}
                    />
                    
                  <div className="circle radio-circle"></div>
                  </label>
                  </div>
                <div className='radio-item'>
                <label>Orta
                    <input
                      type="radio"
                      value="option2"
                      checked={selectedOption6 === 'option2'}
                      onChange={handleOptionChange6}
                    />
                     <div className="circle radio-circle"></div>
                  </label> 
                </div>
                <div className='radio-item'>
                <label>İrəli
                    <input
                      type="radio"
                      value="option3"
                      checked={selectedOption6 === 'option3'}
                      onChange={handleOptionChange6}
                    />
                   <div className="circle radio-circle"></div>
                  </label> 
                </div>
            </div>
          </div>
          }
          </div>
          }
          {showDizayn && 
          <div>
            <p className='question'>Hansı dizayn proqramlarını bilirsiniz?*</p>
            <div className='dropdown' ref={refDizayn}>
        <div className='select' onClick={SelectDizaynClick}>
        <DizaynContent
        showFigmaCon={showFigmaCon}
        showCanvaCon={showCanvaCon}
        showPhotoshopCon={showPhotoshopCon}
      />
        <img className={`vector ${showDizaynCon? 'vector-rotate' : ''}`} src={vektor}></img></div>
        {showDizaynCon && 
       <div className='dropdown-content'>
       <a className={`item ${showFigmaCon ? 'active' : ''}`} onClick={Figma}>Figma
       <div className={`circle ${showFigmaCon ? 'circle-active' : ''}`}></div></a>
       <a className={`item ${showCanvaCon ? 'active' : ''}`} onClick={Canva}>Canva
       <div className={`circle ${showCanvaCon ? 'circle-active' : ''}`}></div></a>
       <a className={`item ${showPhotoshopCon ? 'active' : ''}`} onClick={Photoshop}>Photoshop
       <div className={`circle ${showPhotoshopCon ? 'circle-active' : ''}`}></div></a>
     </div>
        }
      </div>
      {showFigmaCon && 
         <div>
           <p className='question'>Figma programı üzrə təcrübənizi qeyd edin?*</p>
          <div className='radio'>
                <div className='radio-item'>
                <label>İlkin
                  <input
                      type="radio"
                      value="option1"
                      checked={selectedOption7 === 'option1'}
                      onChange={handleOptionChange7}
                    />
                    
                  <div className="circle radio-circle"></div>
                  </label>
                  </div>
                <div className='radio-item'>
                <label>Orta
                    <input
                      type="radio"
                      value="option2"
                      checked={selectedOption7 === 'option2'}
                      onChange={handleOptionChange7}
                    />
                     <div className="circle radio-circle"></div>
                  </label> 
                </div>
                <div className='radio-item'>
                <label>İrəli
                    <input
                      type="radio"
                      value="option3"
                      checked={selectedOption7 === 'option3'}
                      onChange={handleOptionChange7}
                    />
                   <div className="circle radio-circle"></div>
                  </label> 
                </div>
          </div>
         </div>
          }
          {showCanvaCon &&
          <div>
            <p className='question'>Canva programı üzrə təcrübənizi qeyd edin?*</p> 
          <div className='radio'>
          <div className='radio-item'>
                <label>İlkin
                  <input
                      type="radio"
                      value="option1"
                      checked={selectedOption8 === 'option1'}
                      onChange={handleOptionChange8}
                    />
                    
                  <div className="circle radio-circle"></div>
                  </label>
                  </div>
                <div className='radio-item'>
                <label>Orta
                    <input
                      type="radio"
                      value="option2"
                      checked={selectedOption8 === 'option2'}
                      onChange={handleOptionChange8}
                    />
                     <div className="circle radio-circle"></div>
                  </label> 
                </div>
                <div className='radio-item'>
                <label>İrəli
                    <input
                      type="radio"
                      value="option3"
                      checked={selectedOption8 === 'option3'}
                      onChange={handleOptionChange8}
                    />
                   <div className="circle radio-circle"></div>
                  </label> 
                </div>
          </div>
          </div>          
          }
          {showPhotoshopCon && 
          <div>
            <p className='question'>Photoshop programı üzrə təcrübənizi qeyd edin?*</p>
            <div className='radio'>
            <div className='radio-item'>
                <label>İlkin
                  <input
                      type="radio"
                      value="option1"
                      checked={selectedOption9 === 'option1'}
                      onChange={handleOptionChange9}
                    />
                    
                  <div className="circle radio-circle"></div>
                  </label>
                  </div>
                <div className='radio-item'>
                <label>Orta
                    <input
                      type="radio"
                      value="option2"
                      checked={selectedOption9 === 'option2'}
                      onChange={handleOptionChange9}
                    />
                     <div className="circle radio-circle"></div>
                  </label> 
                </div>
                <div className='radio-item'>
                <label>İrəli
                    <input
                      type="radio"
                      value="option3"
                      checked={selectedOption9 === 'option3'}
                      onChange={handleOptionChange9}
                    />
                   <div className="circle radio-circle"></div>
                  </label> 
                </div>
            </div>
          </div>
          }          
          </div>
          }
            {showDiger && 
          <div>
              {/* diger */}
          </div>
          }
          </div>
     </div>
      </div>
      </div>
       <div className='btn-box'>
       <button className='prev btn'><img className='prev-img' src={prev}></img>Geri</button>
       <button className='submit btn'>Yekunlaşdır</button>
     </div>
     <img className='icon' src={icon}></img>
    </div>
  );
}

export default App;
