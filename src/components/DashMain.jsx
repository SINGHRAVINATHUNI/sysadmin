import * as React from 'react'
import {useState} from 'react'
import './DashMain.css'
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPersonCircleCheck } from '@fortawesome/free-solid-svg-icons';
// import { faPersonCircleXmark } from '@fortawesome/free-solid-svg-icons';
// import { faUsers } from '@fortawesome/free-solid-svg-icons';
// import { faPersonCirclePlus } from '@fortawesome/free-solid-svg-icons';
// import Topnavbar from './Topnavbar';
import {faUserPlus} from '@fortawesome/free-solid-svg-icons';

import actuserpng  from './img/actvUser.png'
import inactuserpng  from './img/inactvUser.png'
import people  from './img/people.png'
import pendingUser  from './img/pendingUser.png'


import PublishMassge from '../graph/PublishMassge';
import DeliverdMassge from '../graph/DeliverdMassge';
import DropedMassge from '../graph/DropedMassge';

// table section
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
//import Paper from '@mui/material/esm/Paper';
//import { Paper } from '@mui/material';
const { default: Paper } = await import('@mui/material/Paper');


//import sbwhiteredlogo from './img/smartbuildlogo.png'
// const [ searchArea , setSearchArea ] = useState('');


const DashMain = () => {
  console.log("UserMangnt component")

   // State to manage the selected filter
   const [selectedFilter, setSelectedFilter] = useState('all');

   // Handler function to handle filter change
   const handleFilterChange = (event) => {

     setSelectedFilter(event.target.value);
     // You can perform additional actions based on the selected filter if needed

   };



   const rows = [
    { name: 'Frozen yoghurt', calories: 159 },
    { name: 'Ice cream sandwich', calories: 237 },
    { name: 'Eclair', calories: 262 },
    { name: 'Cupcake', calories: 305 },
    { name: 'Gingerbread', calories: 356 },
  ];
  

return (
  <div>
      {/* <div className='topnav'>
          <Topnavbar/>
      </div> */}
      <div className='main-content'>
          <section className='cards' >
              <div className="card" >
                  <div className='content' >
                      <div className='purpose'><img src= {actuserpng} alt="Logo" className='active-user'/></div>
                      {/* <div className='purpose'><i class="fa-3x"><FontAwesomeIcon icon={faPersonCircleCheck} /></i></div> */}
                      <div className="data">12
                              
                              <div>Active Users</div>
                      </div>
                  </div>
              </div>
              <div className="card">
                  <div className='content'>
                          <div className='purpose'><img src= {inactuserpng} alt="Logo" className='inactive-user'/></div>
                          {/* <div className='purpose'><i class="fa-3x"><FontAwesomeIcon icon={faPersonCircleXmark} /></i></div> */}
                          <div className='data'>
                          <div>3</div>
                          <div>Inactive Users</div>
                          </div>
                  </div>
              </div>
              <div className="card">
                <div className='content'>
                        <div className='purpose'><img src= { people } alt="Logo" className='total-user'/></div>
                        {/* <div className='purpose'><i class="fa-2x"><FontAwesomeIcon icon={faUsers} /></i></div> */}
                        <div className="data">15
                                
                                <div>Total Users</div>
                        </div>
                </div>
              </div>
              <div className="card">
               <div className='content'>
                     <div className='purpose'><img src= { pendingUser } alt="Logo" className='pend-user'/></div>
                     {/* <div className='purpose'><i class="fa-3x"><FontAwesomeIcon icon={faPersonCirclePlus} /></i></div> */}
                          <div className='data'>
                          <div>1</div>
                          <div>Request</div>
                          </div>
               </div>
                 
              </div>
          </section>
            <div className='msgFilter' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 30 }}>
                {/* Label on the left */}
                <label>Total Messages: 9999</label>
                
                {/* Dropdown select for filter on the right */}
                <select value={selectedFilter} onChange={handleFilterChange}>
                    <option value="14">Last 14 Day's</option>
                    <option value="7">Last 7 Day's</option>
                    <option value="1">Last 24 Hours</option>
                </select>
            </div>

            <section className='w-full' style={{paddingTop: 30}}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' style={{ display: 'flex'}}>
                   <div className='card !p-0 flex-1 text-gray-700 flex flex-col justify-between' style={{ opacity: 1, transform: 'none' }}>
                        <div className='px-4 py-3 flex gap-2 justify-between item-center' style={{display:'flex', alignItems:'center',  height: '20px' }}>
                                
                                <div className='gCard1'>
                                </div>
                                <h4>&nbsp;Publish Message</h4>  
                                <span className='content-heading dark:text-white right:0' style={{paddingLeft: '50px'}}> 10000</span>                           
                        </div>
                        
                        <div style={{backgroundColor: 'white', borderRadius: '0 0 10px 10px' , marginTop: 10 }}>
                                    <PublishMassge />
                        </div>                       
                  </div>

                  <div className='card !p-0 flex-1 text-gray-700 flex flex-col justify-between' style={{ opacity: 1, transform: 'none' }}>
                        <div className='px-4 py-3 flex gap-2 justify-between item-center' style={{display:'flex', alignItems:'center', height: '20px' }}>
                            <div className='gCard2'>
                            </div>
                            <h4>&nbsp;Delivered Message</h4>
                            <span className='content-heading dark:text-white right:0' style={{paddingLeft: '50px'}}> 1999</span>
                        </div>
                       
                        <div style={{backgroundColor: 'white', borderRadius: '0 0 10px 10px' , marginTop: 10 }}>
                                    <DeliverdMassge />
                        </div>
                  </div>

                  <div className='card !p-0 flex-1 text-gray-700 flex flex-col justify-between' style={{ opacity: 1, transform: 'none' }}>
                        <div className='px-4 py-3 flex gap-2 justify-between item-center' style={{display:'flex', alignItems:'center', height: '20px' }}>
                            <div className='gCard3'>
                            </div>
                            <h4>&nbsp;Dropped Messages</h4>
                            <span className='content-heading dark:text-white right:0' style={{paddingLeft: '50px'}}> 2550</span>
                        </div>
                       
                        <div style={{backgroundColor: 'white', borderRadius: '0 0 10px 10px' , marginTop: 10 }}>
                                    <DropedMassge />
                        </div>
                  </div>

                  <div className='card !p-0 flex-1 text-gray-700 flex flex-col justify-between' style={{ opacity: 1, transform: 'none' }}>
                        <div className='px-4 py-3 flex gap-2 justify-between item-center' style={{display:'flex', alignItems:'center', height: '20px' }}>
                            <div className='gCard3'>
                            </div>
                            <h4>&nbsp;Dropped Messages</h4>
                            <span className='content-heading dark:text-white right:0' style={{paddingLeft: '50px'}}> 2550</span>
                        </div>
                       
                        <div style={{backgroundColor: 'white', borderRadius: '0 0 10px 10px' , marginTop: 10 }}>
                                    <DropedMassge />
                        </div>
                  </div>

                 
                </div>
            </section>

            <div className='msgFilter' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 30 }}>
                {/* Label on the left */}
                <label>Rules Statistics</label>
                
                {/* Dropdown select for filter on the right */}
                <select value={selectedFilter} onChange={handleFilterChange}>
                    <option value="14">Last 14 Day's</option>
                    <option value="7">Last 7 Day's</option>
                    <option value="1">Last 24 Hours</option>
                </select>
            </div>

            <section className='w-full' style={{paddingTop: 30}}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' style={{ display: 'flex'}}>
                   <div className='card !p-0 flex-1 text-gray-700 flex flex-col justify-between' style={{ opacity: 1, transform: 'none' }}>
                        <div className='px-4 py-3 flex gap-2 justify-between item-center' style={{display:'flex', alignItems:'center',  height: '20px' }}>
                                
                                <div className='gCard1'>
                                </div>
                                <h4>&nbsp;Publish Message</h4>  
                                <span className='content-heading dark:text-white right:0' style={{paddingLeft: '50px'}}> 10000</span>                           
                        </div>
                        
                        <div style={{backgroundColor: 'white', borderRadius: '0 0 10px 10px' , marginTop: 10 }}>
                                    <PublishMassge />
                        </div>                       
                  </div>

                  <div className='card !p-0 flex-1 text-gray-700 flex flex-col justify-between' style={{ opacity: 1, transform: 'none' }}>
                        <div className='px-4 py-3 flex gap-2 justify-between item-center' style={{display:'flex', alignItems:'center', height: '20px' }}>
                            <div className='gCard2'>
                            </div>
                            <h4>&nbsp;Delivered Message</h4>
                            <span className='content-heading dark:text-white right:0' style={{paddingLeft: '50px'}}> 1999</span>
                        </div>
                       
                        <div style={{backgroundColor: 'white', borderRadius: '0 0 10px 10px' , marginTop: 10 }}>
                                    <DeliverdMassge />
                        </div>
                  </div>

                  <div className='card !p-0 flex-1 text-gray-700 flex flex-col justify-between' style={{ opacity: 1, transform: 'none' }}>
                        <div className='px-4 py-3 flex gap-2 justify-between item-center' style={{display:'flex', alignItems:'center', height: '20px' }}>
                            <div className='gCard3'>
                            </div>
                            <h4>&nbsp;Dropped Messages</h4>
                            <span className='content-heading dark:text-white right:0' style={{paddingLeft: '50px'}}> 2550</span>
                        </div>
                       
                        <div style={{backgroundColor: 'white', borderRadius: '0 0 10px 10px' , marginTop: 10 }}>
                                    <DropedMassge />
                        </div>
                  </div>

                  <div className='card !p-0 flex-1 text-gray-700 flex flex-col justify-between' style={{ opacity: 1, transform: 'none' }}>
                        <div className='px-4 py-3 flex gap-2 justify-between item-center' style={{display:'flex', alignItems:'center', height: '20px' }}>
                            <div className='gCard3'>
                            </div>
                            <h4>&nbsp;Dropped Messages</h4>
                            <span className='content-heading dark:text-white right:0' style={{paddingLeft: '50px'}}> 2550</span>
                        </div>
                       
                        <div style={{backgroundColor: 'white', borderRadius: '0 0 10px 10px' , marginTop: 10 }}>
                                    <DropedMassge />
                        </div>
                  </div>

                 
                </div>
            </section>

            <div className='msgFilter' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 30 }}>
                {/* Label on the left */}
                <label>Recent Updates</label>
            </div>


             <div className="tableContainer">
             <div className="tableCard">
                <div className='msgFilter' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 10 }}>
                    {/* Label on the left */}
                    <label>Most Active Devices</label>
                    
                    {/* Dropdown select for filter on the right */}
                    <select value={selectedFilter} onChange={handleFilterChange}>
                        <option value="14">Last 14 Day's</option>
                        <option value="7">Last 7 Day's</option>
                        <option value="1">Last 24 Hours</option>
                    </select>
                </div>
                <TableContainer component={Paper} className="tableContainer">
                  <Table aria-label="simple table">
                    <TableHead style={{backgroundColor:'blue'}}>
                      <TableRow>
                      <TableCell style={{ backgroundColor: 'black', color: 'white' }}>Name</TableCell>
                      <TableCell align="right" style={{ backgroundColor: 'black', color: 'white' }}>Number</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow key={row.name} style={{backgroundColor: '#f1f1f1'}}>
                          <TableCell component="th" scope="row">
                            {row.name}
                          </TableCell>
                          <TableCell align="right">{row.calories}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>

              
                <div className="tableCard">
                  <div className='msgFilter' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',  paddingBottom: 10  }}>
                    {/* Label on the left */}
                  <label>Recent Updates</label>
                  </div>
                  <TableContainer component={Paper} className="tableContainer">
                  <Table aria-label="simple table">
                    <TableHead style={{backgroundColor:'blue'}}>
                      <TableRow>
                      <TableCell style={{ backgroundColor: 'black', color: 'white' }}>Device Name</TableCell>
                      <TableCell align="center" style={{ backgroundColor: 'black', color: 'white' }}>Priority</TableCell>
                      <TableCell align="right" style={{ backgroundColor: 'black', color: 'white' }}>Created At</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <h5>No incident</h5>
                    </TableBody>
                  </Table>
                </TableContainer>
                </div>
            </div>




      </div>
  </div>
)
}

export default DashMain