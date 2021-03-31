import React, { Component } from "react";
import { observer } from "mobx-react";
import AuthStore from "./NetlifyComponents/AuthStore";

class ViewDataSection extends Component {

    
  
    render ()
    {


            
        return (
            <table className="table table-hover table-bordererd">
                <thead>
                    <tr>
                        <th scope="col"><center>Sample Number</center></th>
                        <th scope="col"><center>Depth</center></th>
                        <th scope="col"><center>Station</center></th>
                        <th scope="col"><center>Date</center></th>
                        <th scope="col"><center>Time</center></th>
                        <th scope="col"><center>N GPS Coordinates</center></th>
                        <th scope="col"><center>E GPS Coordinates</center></th>
                        
                        <th scope="col"><center>Volume(L)</center></th>
                        <th scope="col"><center>Storage</center></th>
                        <th scope="col"><center>Processed</center></th>
                        <th scope="col"><center>Volume Processed (L)</center></th>
                        
                        <th scope="col"><center>Depth (m)</center></th>
                        <th scope="col"><center>O2 Levels</center></th>
                        <th scope="col"><center>Temp (oC)</center></th>
                        <th scope="col"><center>Salinity</center></th>
                        <th scope="col"><center>Air temp in Shade (oC)</center></th>
                        <th scope="col"><center>Cloud cover</center></th>
                        <th scope="col"><center>Wind Speed (kph)</center></th>
                        <th scope="col"><center>Sea color</center></th>
                        <th scope="col"><center>Tide</center></th>
                        <th scope="col"><center>RH%</center></th>
                        <th scope="col"><center>Wind direction</center></th>
                         <th scope="col"><center>Barom Pressure</center></th>
                         <th scope="col"><center>Wave height</center></th>
                         <th scope="col"><center>Succhi disc</center></th>
                         <th scope="col"><center>Total depth (m)</center></th>
                    </tr>
                    
                </thead>
                <tbody id="cursorPointer">
                    {/*rendering data*/}

                    <tr>
                    <td><center>10</center></td>
                    <td><center>Surface</center></td>
                    <td><center>K6</center></td>
                    <td><center>5/1/2020</center></td>
                    <td><center>9:25am</center></td>
                    <td><center>29o 26.997</center></td>
                    <td><center>47o 57.986</center></td>
                    <td><center>{'>3L'}</center></td>
                    <td><center>4oC</center></td>
                    <td><center>Y</center></td>
                    <td><center>1</center></td>
                    <td><center>1.22</center></td>
                    <td><center>7.41</center></td>
                    <td><center>17.13</center></td>
                    <td><center>40.27</center></td>                    
                    <td><center>18.30</center></td>
                    <td><center>Clear</center></td>
                    <td><center>9.7</center></td>
                    
                    <td><center>Forle 10</center></td>
                    <td><center>Low Tide</center></td>
                    <td><center>56</center></td>
                    <td><center>NW</center></td>
                    <td><center>1016.3</center></td>
                    <td><center>1-2ft</center></td>
                    <td><center>2m</center></td>
                    <td><center>10.7</center></td>


                    </tr>

                    <tr>
                    <td><center>10</center></td>
                    <td><center>Bottom</center></td>
                    <td><center>K6</center></td>
                    <td><center>5/1/2020</center></td>
                    <td><center>9:25am</center></td>
                    <td><center>29o 26.997</center></td>
                    <td><center>47o 57.986</center></td>
                    <td><center>{'>3L'}</center></td>
                    <td><center>4oC</center></td>
                    <td><center>Y</center></td>
                    <td><center>1</center></td>
                    <td><center>9.78</center></td>
                    <td><center>7.49</center></td>
                    <td><center>17.06</center></td>
                    <td><center>40.62</center></td>
                    <td><center>18.30</center></td>
                    <td><center>Clear</center></td>
                    <td><center>9.7</center></td>

                    <td><center>Forle 10</center></td>
                    <td><center>Low Tide</center></td>
                    <td><center>56</center></td>
                    <td><center>NW</center></td>
                    <td><center>1016.3</center></td>
                    <td><center>1-2ft</center></td>
                    <td><center>2m</center></td>
                    <td><center>10.7</center></td>
                    
                    </tr>
                    
                    <tr>
                    <td><center>10</center></td>
                    <td><center>Surface</center></td>
                    <td><center>A</center></td>
                    <td><center>2/2/2020</center></td>
                    <td><center>9:25am</center></td>
                    <td><center>29o 35.995</center></td>
                    <td><center>48o 10.001</center></td>
                    <td><center>{'>3L'}</center></td>
                    <td><center>4oC</center></td>
                    <td><center>Y</center></td>
                    <td><center>1</center></td>
                    <td><center>1.36</center></td>
                    <td><center>8.81</center></td>
                    <td><center>13.96</center></td>
                    <td><center>35.40</center></td>
                    <td><center>18.10</center></td>
                    <td><center>Clear</center></td>
                    <td><center>11.1</center></td>
                    
                    <td><center>ULE 3</center></td>
                    <td><center>Low Tide</center></td>
                    <td><center>44.5</center></td>
                    <td><center>N</center></td>
                    <td><center>1022.2</center></td>
                    <td><center>1-2ft</center></td>
                    <td><center>1.2m</center></td>
                    <td><center>6.5</center></td>


                    </tr>
                    
                    <tr>
                    <td><center>10</center></td>
                    <td><center>Bottom</center></td>
                    <td><center>A</center></td>
                    <td><center>2/2/2020</center></td>
                    <td><center>9:25am</center></td>
                    <td><center>29o 35.995</center></td>
                    <td><center>48o 10.001</center></td>
                    <td><center>{'>3L'}</center></td>
                    <td><center>4oC</center></td>
                    <td><center>Y</center></td>
                    <td><center>1</center></td>
                    <td><center>5.59</center></td>
                    <td><center>8.78</center></td>
                    <td><center>13.95</center></td>
                    <td><center>35.41</center></td>
                    <td><center>18.10</center></td>
                    <td><center>Clear</center></td>
                    <td><center>11.1</center></td>

                    <td><center>ULE 3</center></td>
                    <td><center>Low Tide</center></td>
                    <td><center>44.5</center></td>
                    <td><center>N</center></td>
                    <td><center>1022.2</center></td>
                    <td><center>1-2ft</center></td>
                    <td><center>1.2m</center></td>
                    <td><center>6.5</center></td>

                    </tr>
                    
                    <tr>
                    <td><center>11</center></td>
                    <td><center>Surface</center></td>
                    <td><center>K6</center></td>
                    <td><center>3/2/2020</center></td>
                    <td><center>8:45am</center></td>
                    <td><center>29o 26.998</center></td>
                    <td><center>47o 58.007</center></td>
                    <td><center>{'>3L'}</center></td>
                    <td><center>4oC</center></td>
                    <td><center>Y</center></td>
                    <td><center>1</center></td>
                    <td><center>1.31</center></td>
                    <td><center>8.17</center></td>
                    <td><center>14.83</center></td>
                    <td><center>40.34</center></td>
                    <td><center>15.40</center></td>
                    <td><center>Clear</center></td>
                    <td><center>9.2</center></td>

                    <td><center>Forle 7</center></td>
                    <td><center>High Tide</center></td>
                    <td><center>63.8</center></td>
                    <td><center>NW</center></td>
                    <td><center>1021.7</center></td>
                    <td><center>2-4ft</center></td>
                    <td><center>5m</center></td>
                    <td><center>21</center></td>

                    </tr>

                    <tr>
                    <td><center>11</center></td>
                    <td><center>Bottom</center></td>
                    <td><center>K6</center></td>
                    <td><center>3/2/2020</center></td>
                    <td><center>8:45am</center></td>
                    <td><center>29o 26.998</center></td>
                    <td><center>47o 58.007</center></td>
                    <td><center>{'>3L'}</center></td>
                    <td><center>4oC</center></td>
                    <td><center>Y</center></td>
                    <td><center>1</center></td>
                    <td><center>9.56</center></td>
                    <td><center>8.10</center></td>
                    <td><center>14.78</center></td>
                    <td><center>40.52</center></td>
                    <td><center>15.40</center></td>
                    <td><center>Clear</center></td>
                    <td><center>9.2</center></td>

                    <td><center>Forle 7</center></td>
                    <td><center>High Tide</center></td>
                    <td><center>63.8</center></td>
                    <td><center>NW</center></td>
                    <td><center>1021.7</center></td>
                    <td><center>2-4ft</center></td>
                    <td><center>5m</center></td>
                    <td><center>21</center></td>

                    </tr>
                    
                    <tr>
                    <td><center>12</center></td>
                    <td><center>Surface</center></td>
                    <td><center>18</center></td>
                    <td><center>4/2/2020</center></td>
                    <td><center>N/A</center></td>
                    <td><center>29o 03.726</center></td>
                    <td><center>48o 30.332</center></td>
                    <td><center>{'>3L'}</center></td>
                    <td><center>4oC</center></td>
                    <td><center>Y</center></td>
                    <td><center>1</center></td>
                    <td><center>20.17</center></td>
                    <td><center>7.36</center></td>
                    <td><center>16.50</center></td>
                    <td><center>40.24</center></td>
                    <td><center>15.30</center></td>
                    <td><center>Clear</center></td>
                    <td><center>11.1</center></td>

                    <td><center>ULE 3</center></td>
                    <td><center>High Tide</center></td>
                    <td><center>57.1</center></td>
                    <td><center>NW</center></td>
                    <td><center>1022</center></td>
                    <td><center>1-4ft</center></td>
                    <td><center>5.5m</center></td>
                    <td><center>21.1</center></td>

                    </tr>
                    
                </tbody>
            </table>
            
        );
        
    }
}

export default observer (ViewDataSection);