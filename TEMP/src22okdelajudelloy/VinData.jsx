import React from "react";

import style from "./VinForm.module.css";
import Preloader from "./Preloader/Preloader";

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

const AuctionData = (props) => {
    const NoAuctionData = () =>{
            return <div>
                NO Auction Data for this VIN
            </div>;
        };

    // if (props.dataArray.length === 0)
    //     return (
    //         <NoAuctionData/>
    //     );

    if (props.dataArray.length !== 0)
        return (
            <>
                <div>
                    <div id={style.va_oc_table}>
                        <table id={style.va_oc_data_table}>
                            <thead>
                            <tr>
                                <td></td>
                                <td>Details</td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>VIN:</td>
                                <td id="">{props.dataArray[0][ 'VIN' ]}</td>
                            </tr>
                            <tr>
                                <td>Doc Type:</td>
                                <td id="">{props.dataArray[0][ 'Sale Title State' ] + " " + props.dataArray[0][ 'Sale Title Type' ]}</td>
                            </tr>
                            <tr>
                                <td>Odometer:</td>
                                <td id="">{props.dataArray[0][ 'Odometer' ]}</td>
                            </tr>
                            <tr>
                                <td>Highlights:</td>
                                <td id="">{props.dataArray[0][ 'Runs/Drives' ]}</td>
                            </tr>
                            <tr>
                                <td>Primary Damage:</td>
                                <td id="">{props.dataArray[0][ 'Damage Description' ]}</td>
                            </tr>
                            <tr>
                                <td>Secondary Damage:</td>
                                <td id="">{props.dataArray[0][ 'Secondary Damage' ]}</td>
                            </tr>
                            <tr>
                                <td>Est. Retail Value:</td>
                                <td id="">{props.dataArray[0][ 'Est' ][ ' Retail Value' ]}</td>
                            </tr>
                            <tr>
                                <td>Body Style:</td>
                                <td id="">{props.dataArray[0][ 'Body Style' ]}</td>
                            </tr>
                            <tr>
                                <td>Vehicle Type:</td>
                                <td id="">{props.dataArray[0][ 'Vehicle Type' ]}</td>
                            </tr>
                            <tr>
                                <td>Color:</td>
                                <td id="">{props.dataArray[0][ 'Color' ]}</td>
                            </tr>
                            <tr>
                                <td>Engine Type:</td>
                                <td id="">{props.dataArray[0][ 'Engine' ]}</td>
                            </tr>
                            <tr>
                                <td>Cylinders:</td>
                                <td id="">{props.dataArray[0][ 'Cylinders' ]}</td>
                            </tr>
                            <tr>
                                <td>Transmission:</td>
                                <td id="">{props.dataArray[0][ 'Transmission' ]}</td>
                            </tr>
                            <tr>
                                <td>Drive:</td>
                                <td id="">{props.dataArray[0][ 'Drive' ]}</td>
                            </tr>
                            <tr>
                                <td>Fuel:</td>
                                <td id="">{props.dataArray[0][ 'Fuel Type' ]}</td>
                            </tr>
                            <tr>
                                <td>Keys:</td>
                                <td id="">{props.dataArray[0][ 'Has Keys-Yes or No' ]}</td>
                            </tr>
                            <tr>
                                <td>Location:</td>
                                <td id="">{props.dataArray[0][ 'Yard name' ]}</td>
                            </tr>
                            <tr>
                                <td>Sale Date:</td>
                                <td id="">{props.dataArray[0][ 'Sale Date M/D/CY' ]}</td>
                            </tr>
                            <tr className="va_oc_data_table_lastrow">
                                <td>Notes:</td>
                                <td id="">{props.dataArray[0][ 'Special Note' ]}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className={style.wrapper}>
                    <div className={style.form_wrap}>
                        <img src={'https://' + props.dataArray[0][ 'Image Thumbnail' ]}/>
                    </div>
                </div>
            </>
        );

    return null;
}

const GalleryData = (props) => {
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

    const NoGalleryData = () =>{
        return <div>
            NO Gallery Data for this VIN
        </div>;
    };

    // if (props.imgLinks.length === 0)
    //     return (
    //         <NoGalleryData/>
    //     );

    if (props.imgLinks.length !== 0)
        return (
            <>
                <div>
                    <AliceCarousel class={style.width80}>
                        {imagesElements}
                    </AliceCarousel>
                </div>
            </>
        );

    return null;
}

const CostData = (props) => {
    function getSum(total, num) {
        return total + Math.round(num);
    }

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const NoCostData = () =>{
        return <div>
            NO Cost Data for this VIN
        </div>;
    };


    {/*<div className={style.wrapper}>*/}
    {/*    <div className={style.form_wrap}>*/}
    {/*        <div>*/}
    {/*            No Data for this VIN, please check VIN Number*/}
    {/*        </div>*/}
    {/*    </div>*/}
    {/*</div>*/}
    if ((props.vinData2 !== null && props.vinData3 !== null) && (props.vinData2.success == false && props.vinData3.success == false))
        return (
            <NoCostData/>
        );

    if ((props.vinData2 !== null && props.vinData3 !== null) && (props.vinData2.success === true && props.vinData3.success === true))
        return (
            <>
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

    return null;
}

const VinData = (props) => {
    //debugger;



    if (props.isFetching)
        return (
            <div className={style.wrapper}>
                <div className={style.form_wrap}>
                    <div><Preloader/></div>
                </div>
            </div>
        );

    // <AuctionData dataArray={props.dataArray}/>
    //<GalleryData imgLinks={props.imgLinks}/>
    //<CostData vinData2={props.vinData2} vinData3={props.vinData3}/>

    return (
        <div>
            <AuctionData dataArray={props.dataArray}/>
            <GalleryData imgLinks={props.imgLinks}/>
            <CostData vinData2={props.vinData2} vinData3={props.vinData3}/>
        </div>
    );
}

export default VinData;