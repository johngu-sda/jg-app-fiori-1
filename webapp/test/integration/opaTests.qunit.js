sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'jgapp1/jgappfiori1/test/integration/FirstJourney',
		'jgapp1/jgappfiori1/test/integration/pages/IncidentsList',
		'jgapp1/jgappfiori1/test/integration/pages/IncidentsObjectPage'
    ],
    function(JourneyRunner, opaJourney, IncidentsList, IncidentsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('jgapp1/jgappfiori1') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheIncidentsList: IncidentsList,
					onTheIncidentsObjectPage: IncidentsObjectPage
                }
            },
            opaJourney.run
        );
    }
);