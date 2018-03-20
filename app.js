// define the dimensions of the graph display wrt window
let marginMap = {
    top: 10,
    right: 10,
    bottom: 50,
    left: 120
};
let fullWidthMap = window.innerWidth * .7;
let fullHeightMap = window.innerHeight * .7;
let widthMap = fullWidthMap - marginMap.right - marginMap.left;
let heightMap = fullHeightMap - marginMap.top - marginMap.bottom;

let marginPcoords = {
    top: 90,
    right: 10,
    bottom: 10,
    left: 50
};
let fullWidthPcoords = window.innerWidth * 0.4;
let fullHeightPcoords = window.innerHeight * 0.35;
let widthPcoords = fullWidthPcoords - marginPcoords.right - marginPcoords.left;
let heightPcoords = fullHeightPcoords - marginPcoords.top - marginPcoords.bottom;

let color = d3.scaleOrdinal(d3.schemeCategory20);

d3.csv('data/PoliceKillingsUS.csv', (policedata) => {
    d3.csv('./data/cityData.csv', function (citydata) {
        console.log('police', policedata);
        console.log('city', citydata);

        var heatMap = new HeatMap(d3.select("#map-holder"), policedata,
            
            function () {
                PCoords.update(citydata, heatMap.selectedStates);
                Sankey.update(policedata, heatMap.selectedStates);
            });

        var PCoords = new Parallel_Coords(d3.select("#pcoords-holder"), citydata, policedata, []);

        var Sankey = new SankeyDiagram(d3.select("#sankey-holder"), policedata);

    });
});