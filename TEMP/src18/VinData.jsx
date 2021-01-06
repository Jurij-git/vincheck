import React from "react";

import style from "./VinForm.module.css";
import Preloader from "./Preloader/Preloader";

const VinData = (props) => {
    //debugger;

    function getSum(total, num) {
        return total + Math.round(num);
    }

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }



    let imagesElements;
    if (props.imgLinks !== null){
        imagesElements = props.imgLinks.map( l =>{
            return(
                <div>
                    <img src={l}/>
                </div>
            )
        } );
        console.log('imagesElements', imagesElements);
    }
    debugger;



/*
    if (props.imgLinks === null){
        imagesElements = function() {
            return(
                <div>
                    <span> NO data for this VIN </span>
                </div>
            )
        };
        console.log('ImagesElements', imagesElements);
    }*/

/*    ImagesElements = (props) =>{
        return <div>
            <div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQUdEyqt1RY9f1S7mCyEN3SeOWAzIQz5UYrQHmDBZmgNuzSU8Mp&usqp=CAU'/>

                <div>
                    <span>like ZZZZ</span>
                </div>
            </div>
        </div>
    }*/
/*
    let ImagesElements2 = (props) => {return <div>ggg 2 </div>};

    const Profile = (props) =>{
        return <div>
            ggg PROFILE
        </div>;
    };

    if (props.isFetching)
        return (
            <div className={style.wrapper}>
                <div className={style.form_wrap}>
                    <div><Preloader/></div>
                </div>
            </div>
        );

<Profile/>
                    <ImagesElements2/>
                    <imagesElements/> original
*/
    if ((props.vinData2 !== null && props.vinData3 !== null) && (props.vinData2.success === true && props.vinData3.success === true))
        return (
            <>

                <div>
                    {imagesElements}
                </div>

                <imagesElements2/>
                <div className={style.wrapper}>
                    <div className={style.form_wrap}>
                        <div>
                            Vin: {props.vinData2.vin}
                        </div>
                        <div>
                            {/*{props.isFetching ? <Preloader/> : null}*/}
                            {/*Vehicle: {props.vinData2.vehicle}*/}
                            Vehicle: {props.vinData2.vehicle}
                        </div>
                        <div>
                            Ownership Cost:
                        </div>
                    </div>
                </div>


                <div>
                    <div id={style.va_oc_table}>
                        <table id={style.va_oc_data_table}>
                            <thead>
                            <tr>
                                <td></td>
                                <td>Year 1</td>
                                <td>Year 2</td>
                                <td>Year 3</td>
                                <td>Year 4</td>
                                <td>Year 5</td>
                                <td>Total</td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Depreciation</td>
                                <td id="va_oc_depreciation1">${numberWithCommas(props.vinData2.depreciation_cost[0])}</td>
                                <td id="va_oc_depreciation2">${numberWithCommas(props.vinData2.depreciation_cost[1])}</td>
                                <td id="va_oc_depreciation3">${numberWithCommas(props.vinData2.depreciation_cost[2])}</td>
                                <td id="va_oc_depreciation4">${numberWithCommas(props.vinData2.depreciation_cost[3])}</td>
                                <td id="va_oc_depreciation5">${numberWithCommas(props.vinData2.depreciation_cost[4])}</td>
                                <td id="va_oc_depreciation_total">${numberWithCommas(props.vinData2.depreciation_cost.reduce(getSum, 0))}</td>
                            </tr>
                            <tr>
                                <td>Insurance</td>
                                <td id="va_oc_insurance1">${numberWithCommas(props.vinData2.insurance_cost[0])}</td>
                                <td id="va_oc_insurance2">${numberWithCommas(props.vinData2.insurance_cost[1])}</td>
                                <td id="va_oc_insurance3">${numberWithCommas(props.vinData2.insurance_cost[2])}</td>
                                <td id="va_oc_insurance4">${numberWithCommas(props.vinData2.insurance_cost[3])}</td>
                                <td id="va_oc_insurance5">${numberWithCommas(props.vinData2.insurance_cost[4])}</td>
                                <td id="va_oc_insurance_total">${numberWithCommas(props.vinData2.insurance_cost.reduce(getSum, 0))}</td>
                            </tr>
                            <tr>
                                <td>Fuel</td>
                                <td id="va_oc_fuel1">${numberWithCommas(props.vinData2.fuel_cost[0])}</td>
                                <td id="va_oc_fuel2">${numberWithCommas(props.vinData2.fuel_cost[1])}</td>
                                <td id="va_oc_fuel3">${numberWithCommas(props.vinData2.fuel_cost[2])}</td>
                                <td id="va_oc_fuel4">${numberWithCommas(props.vinData2.fuel_cost[3])}</td>
                                <td id="va_oc_fuel5">${numberWithCommas(props.vinData2.fuel_cost[4])}</td>
                                <td id="va_oc_fuel_total">${numberWithCommas(props.vinData2.fuel_cost.reduce(getSum, 0))}</td>
                            </tr>
                            <tr>
                                <td>Maintenance</td>
                                <td id="va_oc_maintenance1">${numberWithCommas(props.vinData2.maintenance_cost[0])}</td>
                                <td id="va_oc_maintenance2">${numberWithCommas(props.vinData2.maintenance_cost[1])}</td>
                                <td id="va_oc_maintenance3">${numberWithCommas(props.vinData2.maintenance_cost[2])}</td>
                                <td id="va_oc_maintenance4">${numberWithCommas(props.vinData2.maintenance_cost[3])}</td>
                                <td id="va_oc_maintenance5">${numberWithCommas(props.vinData2.maintenance_cost[4])}</td>
                                <td id="va_oc_maintenance_total">${numberWithCommas(props.vinData2.maintenance_cost.reduce(getSum, 0))}</td>
                            </tr>
                            <tr>
                                <td>Repairs</td>
                                <td id="va_oc_repairs1">${numberWithCommas(props.vinData2.repairs_cost[0])}</td>
                                <td id="va_oc_repairs2">${numberWithCommas(props.vinData2.repairs_cost[1])}</td>
                                <td id="va_oc_repairs3">${numberWithCommas(props.vinData2.repairs_cost[2])}</td>
                                <td id="va_oc_repairs4">${numberWithCommas(props.vinData2.repairs_cost[3])}</td>
                                <td id="va_oc_repairs5">${numberWithCommas(props.vinData2.repairs_cost[4])}</td>
                                <td id="va_oc_repairs_total">${numberWithCommas(props.vinData2.repairs_cost.reduce(getSum, 0))}</td>
                            </tr>
                            <tr>
                                <td>Taxes &amp; Fees</td>
                                <td id="va_oc_fees1">${numberWithCommas(props.vinData2.fees_cost[0])}</td>
                                <td id="va_oc_fees2">${numberWithCommas(props.vinData2.fees_cost[0])}</td>
                                <td id="va_oc_fees3">${numberWithCommas(props.vinData2.fees_cost[0])}</td>
                                <td id="va_oc_fees4">${numberWithCommas(props.vinData2.fees_cost[0])}</td>
                                <td id="va_oc_fees5">${numberWithCommas(props.vinData2.fees_cost[0])}</td>
                                <td id="va_oc_fees_total">${numberWithCommas(props.vinData2.fees_cost.reduce(getSum, 0))}</td>
                            </tr>
                            <tr className="va_oc_data_table_lastrow">
                                <td>Ownership Costs</td>
                                <td id="va_oc_ownershipcost1">${numberWithCommas(props.vinData2.total_cost[0])}</td>
                                <td id="va_oc_ownershipcost2">${numberWithCommas(props.vinData2.total_cost[1])}</td>
                                <td id="va_oc_ownershipcost3">${numberWithCommas(props.vinData2.total_cost[2])}</td>
                                <td id="va_oc_ownershipcost4">${numberWithCommas(props.vinData2.total_cost[3])}</td>
                                <td id="va_oc_ownershipcost5">${numberWithCommas(props.vinData2.total_cost[4])}</td>
                                <td id="va_oc_ownershipcost_total">${numberWithCommas(props.vinData2.total_cost_sum)}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <div id={style.va_oc_table}>
                        <table id={style.va_oc_data_table}>
                            <thead>
                            <tr>
                                <td></td>
                                <td>Minimim</td>
                                <td>Average</td>
                                <td>Maximum</td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Market Value</td>
                                <td id="va_oc_depreciation1">${numberWithCommas(props.vinData3.prices.below)}</td>
                                <td id="va_oc_depreciation2">${numberWithCommas(props.vinData3.prices.average)}</td>
                                <td id="va_oc_depreciation3">${numberWithCommas(props.vinData3.prices.above)}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </>
        );

    if ((props.vinData2 != null && props.vinData3 != null) && (props.vinData2.success == false && props.vinData3.success == false))
        return (
            <div className={style.wrapper}>
                <div className={style.form_wrap}>
                    <div>
                        No Data for this VIN, please check VIN Number
                    </div>
                </div>
            </div>
        );

    return null;
}

export default VinData;