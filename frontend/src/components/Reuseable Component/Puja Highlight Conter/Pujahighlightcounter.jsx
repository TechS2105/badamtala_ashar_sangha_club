import React from 'react';
import PujaHighlightCounterStyle from '../../../../public/styles/reuseable style folder/Pujahighlightcounter.module.css';
import YearsOfCelebrationSVG from '../../SVG/Yearsofcelebration';
import FestivalVisitiorSVG from '../../SVG/Festivalvisitiors';
import CreativeThemePandleSVG from '../../SVG/Creativethemepandles';
import CulturalPerformanceSVG from '../../SVG/Culturalperformance';
import AwardRecognition from '../../SVG/Awardsrecognition';

function Pujahighlightcounter() {
    
    return (

        <>
        
            {/** Puja Highlight Counter Section */}
            <div className={PujaHighlightCounterStyle.pujaHighlightCounterSection}>

                {/** Highlight Box */}
                <div className={PujaHighlightCounterStyle.highlightBox}>

                    <YearsOfCelebrationSVG/>
                    <h4> Years Of Celebration </h4>
                    <b><span>25+</span> <br/> Years</b>
                    <p>Celebrating the spirit of Sharod Utsav through devotion, creativity, and joyful participation of the entire community every year.</p>

                </div>
                {/** Highlight Box */}
                <div className={PujaHighlightCounterStyle.highlightBox}>

                    <FestivalVisitiorSVG />
                    <h4> Festival Visitors </h4>
                    <b><span>50K+</span> <br/> Visitors</b>
                    <p>Thousands of devotees and visitors gather every year to experience the artistic pandal and divine atmosphere.</p>

                </div>
                {/** Highlight Box */}
                <div className={PujaHighlightCounterStyle.highlightBox}>

                    <CreativeThemePandleSVG />
                    <h4>Creative Themes</h4>
                    <b><span>20+</span> <br/>Unique Themes</b>
                    <p>Every year the club unveils a unique artistic concept combining cultural tradition with contemporary creative innovation.</p>

                </div>
                {/** Highlight Box */}
                <div className={PujaHighlightCounterStyle.highlightBox}>

                    <CulturalPerformanceSVG />
                    <h4>Cultural Performance </h4>
                    <b><span>100+</span> <br/> Cultural Events</b>
                    <p>Traditional music, dance, dhunuchi naach, and lively community events enhance the joyful atmosphere of the festival.</p>

                </div>
                {/** Highlight Box */}
                <div className={PujaHighlightCounterStyle.highlightBox}>

                    <AwardRecognition />
                    <h4>Awards & Recognition</h4>
                    <b><span>10+</span> <br /> Recognitions</b>
                    <p>Recognized for its creativity, craftsmanship, and rich cultural expression, the puja continues to inspire visitors every year.</p>

                </div>

            </div>
            
        </>

    );

}

export default Pujahighlightcounter;