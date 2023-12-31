import React from 'react';
import {
    Checkbox, ConfigProvider,
    Col, Row
} from 'antd';
import './index.css';



const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
};


const MisAlarmas = () => {
    return <ConfigProvider
        theme={{
            components: {
                Checkbox: {
                    colorPrimaryHover: '#b285e3',
                    colorPrimary: '#b285e3',
                    colorBorder: '#b285e3',
                    controlOutline: '#ebd7fa',
                  
                }
            },
        }}
    >
        <Row className='container-crear'>
            <Col span={14} >
                <div className='container-list-alarmas'>
                    <Checkbox onChange={onChange}>
                        <span className='text-alarma'>
                            7:30 am
                        </span>

                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" className='icon-edit'>
                                <path d="M24.8966 8.01071L22.2788 5.39285L9.32521 18.3429L8.76807 21.5214L11.9431 20.9607L24.8966 8.01071Z" fill="#E6E6E6" />
                                <path d="M29.1429 27.5714H2.85721C2.22507 27.5714 1.71436 28.0821 1.71436 28.7143V30C1.71436 30.1571 1.84293 30.2857 2.00007 30.2857H30.0001C30.1572 30.2857 30.2858 30.1571 30.2858 30V28.7143C30.2858 28.0821 29.7751 27.5714 29.1429 27.5714ZM6.91793 24.5714C6.98936 24.5714 7.06078 24.5643 7.13221 24.5536L13.1394 23.5C13.2108 23.4857 13.2786 23.4536 13.3286 23.4L28.4679 8.26071C28.501 8.22767 28.5273 8.18842 28.5452 8.14522C28.5631 8.10201 28.5724 8.0557 28.5724 8.00892C28.5724 7.96215 28.5631 7.91583 28.5452 7.87263C28.5273 7.82942 28.501 7.79018 28.4679 7.75714L22.5322 1.81785C22.4644 1.74999 22.3751 1.71428 22.2786 1.71428C22.1822 1.71428 22.0929 1.74999 22.0251 1.81785L6.88578 16.9571C6.83221 17.0107 6.80007 17.075 6.78578 17.1464L5.73221 23.1536C5.69747 23.3449 5.70988 23.5418 5.76838 23.7272C5.82688 23.9127 5.92969 24.0811 6.06793 24.2179C6.30364 24.4464 6.60007 24.5714 6.91793 24.5714ZM9.32507 18.3428L22.2786 5.39285L24.8965 8.01071L11.9429 20.9607L8.76793 21.5214L9.32507 18.3428Z" fill="#333333" />
                            </svg>
                        </span>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" className='icon-delete'>
                                <path d="M8.168 27.7143H23.8323L24.6966 9.42857H7.30371L8.168 27.7143Z" fill="#E6E6E6" />
                                <path d="M28.5714 6.85714H23.9999V3.99999C23.9999 2.73928 22.9749 1.71428 21.7142 1.71428H10.2856C9.02493 1.71428 7.99993 2.73928 7.99993 3.99999V6.85714H3.4285C2.79636 6.85714 2.28564 7.36785 2.28564 7.99999V9.14285C2.28564 9.29999 2.41422 9.42857 2.57136 9.42857H4.7285L5.61064 28.1071C5.66779 29.325 6.67493 30.2857 7.89279 30.2857H24.1071C25.3285 30.2857 26.3321 29.3286 26.3892 28.1071L27.2714 9.42857H29.4285C29.5856 9.42857 29.7142 9.29999 29.7142 9.14285V7.99999C29.7142 7.36785 29.2035 6.85714 28.5714 6.85714ZM10.5714 4.28571H21.4285V6.85714H10.5714V4.28571ZM23.8321 27.7143H8.16779L7.3035 9.42857H24.6964L23.8321 27.7143Z" fill="#333333" />
                            </svg>
                        </span>
                    </Checkbox>
                </div>      
                <br></br>
                <div className='container-list-alarmas'>
                    <Checkbox onChange={onChange}>
                        <span className='text-alarma'>
                            7:30 am
                        </span>
                            
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" className='icon-edit'>
                                <path d="M24.8966 8.01071L22.2788 5.39285L9.32521 18.3429L8.76807 21.5214L11.9431 20.9607L24.8966 8.01071Z" fill="#E6E6E6" />
                                <path d="M29.1429 27.5714H2.85721C2.22507 27.5714 1.71436 28.0821 1.71436 28.7143V30C1.71436 30.1571 1.84293 30.2857 2.00007 30.2857H30.0001C30.1572 30.2857 30.2858 30.1571 30.2858 30V28.7143C30.2858 28.0821 29.7751 27.5714 29.1429 27.5714ZM6.91793 24.5714C6.98936 24.5714 7.06078 24.5643 7.13221 24.5536L13.1394 23.5C13.2108 23.4857 13.2786 23.4536 13.3286 23.4L28.4679 8.26071C28.501 8.22767 28.5273 8.18842 28.5452 8.14522C28.5631 8.10201 28.5724 8.0557 28.5724 8.00892C28.5724 7.96215 28.5631 7.91583 28.5452 7.87263C28.5273 7.82942 28.501 7.79018 28.4679 7.75714L22.5322 1.81785C22.4644 1.74999 22.3751 1.71428 22.2786 1.71428C22.1822 1.71428 22.0929 1.74999 22.0251 1.81785L6.88578 16.9571C6.83221 17.0107 6.80007 17.075 6.78578 17.1464L5.73221 23.1536C5.69747 23.3449 5.70988 23.5418 5.76838 23.7272C5.82688 23.9127 5.92969 24.0811 6.06793 24.2179C6.30364 24.4464 6.60007 24.5714 6.91793 24.5714ZM9.32507 18.3428L22.2786 5.39285L24.8965 8.01071L11.9429 20.9607L8.76793 21.5214L9.32507 18.3428Z" fill="#333333" />
                            </svg>
                        </span>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" className='icon-delete'>
                                <path d="M8.168 27.7143H23.8323L24.6966 9.42857H7.30371L8.168 27.7143Z" fill="#E6E6E6" />
                                <path d="M28.5714 6.85714H23.9999V3.99999C23.9999 2.73928 22.9749 1.71428 21.7142 1.71428H10.2856C9.02493 1.71428 7.99993 2.73928 7.99993 3.99999V6.85714H3.4285C2.79636 6.85714 2.28564 7.36785 2.28564 7.99999V9.14285C2.28564 9.29999 2.41422 9.42857 2.57136 9.42857H4.7285L5.61064 28.1071C5.66779 29.325 6.67493 30.2857 7.89279 30.2857H24.1071C25.3285 30.2857 26.3321 29.3286 26.3892 28.1071L27.2714 9.42857H29.4285C29.5856 9.42857 29.7142 9.29999 29.7142 9.14285V7.99999C29.7142 7.36785 29.2035 6.85714 28.5714 6.85714ZM10.5714 4.28571H21.4285V6.85714H10.5714V4.28571ZM23.8321 27.7143H8.16779L7.3035 9.42857H24.6964L23.8321 27.7143Z" fill="#333333" />
                            </svg>
                        </span>
                    </Checkbox>
                </div>     


            </Col>
            <Col span={10} className=''>
                <div className='container-image-list'>
                    <img className='img-alarmas'
                        src="./assets/calendar.png"
                        alt="imagen de calendario"
                    />
                </div>
            </Col>
        </Row>
    </ConfigProvider>
}
export default MisAlarmas;