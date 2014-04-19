

var Ping = require('./lib/ping'),
    websites = [
        // {
            // name: 'CID',
			// url: 'http://cid.hvwan.net/GroupCompany/GC_GroupCompaniesList.asp?selectfromlist=true&entitytype=All&code=&attribute=Country+Name&searchstring=Sweden',
			// proxy: 'http://cid.hvwan.net:80',
			// headers: {
				// 'host' : 'cid.hvwan.net',
				// 'Pragma' : 'no-cache',
				// },
            // timeout: 30
        // },
        {
            name: 'Power via Internet VRRP(Full Path)',
			url: 'http://power.husqvarnagroup.com/webapp/wcs/stores/servlet/HomePageView?storeId=10201&catalogId=10051&langId=-1',
			proxy: 'http://power.husqvarnagroup.com:80',
			headers: {
				'host' : 'power.husqvarnagroup.com',
				'Pragma' : 'no-cache',
				'Cookie' : 'COUNTRY=US; GEOIP_COUNTRY=US;',
			
				},
            timeout: 30
        },
        {
            name: 'Power via Internet BC 1(Full Path)',
			url: 'http://power.husqvarnagroup.com/webapp/wcs/stores/servlet/HomePageView?storeId=10201&catalogId=10051&langId=-1',
			proxy: 'http://94.126.81.129:80',
			headers: {
				'host' : 'power.husqvarnagroup.com',
				'Pragma' : 'no-cache',
				'Cookie' : 'COUNTRY=US; GEOIP_COUNTRY=US;',
			
				},
            timeout: 30
        },
        {
            name: 'Power via Internet BC 2(Full Path)',
			url: 'http://power.husqvarnagroup.com/webapp/wcs/stores/servlet/HomePageView?storeId=10201&catalogId=10051&langId=-1',
			proxy: 'http://94.126.81.130:80',
			headers: {
				'host' : 'power.husqvarnagroup.com',
				'Pragma' : 'no-cache',
				'Cookie' : 'COUNTRY=US; GEOIP_COUNTRY=US;',
			
				},
            timeout: 30
        },
		{
            name: 'Power via Internet BC US(Full Path)',
			url: 'http://power.husqvarnagroup.com/webapp/wcs/stores/servlet/HomePageView?storeId=10201&catalogId=10051&langId=-1',
			proxy: 'http://usproxy.hvwan.net:80',
			headers: {
				'host' : 'power.husqvarnagroup.com',
				'Pragma' : 'no-cache',
				'Cookie' : 'COUNTRY=US; GEOIP_COUNTRY=US;',
			
				},
            timeout: 30
        },
		{
            name: 'Power via Internet BC SE(Full Path)',
			url: 'http://power.husqvarnagroup.com/webapp/wcs/stores/servlet/HomePageView?storeId=10201&catalogId=10051&langId=-1',
			proxy: 'http://seproxy.hvwan.net:80',
			headers: {
				'host' : 'power.husqvarnagroup.com',
				'Pragma' : 'no-cache',
				'Cookie' : 'COUNTRY=US; GEOIP_COUNTRY=US;',
			
				},
            timeout: 30
        },
        // {
            // name: 'Power via Fiddler (Full Path)',
			// url: 'http://power.husqvarnagroup.com/webapp/wcs/stores/servlet/HomePageView?storeId=10201&catalogId=10051&langId=-1',
			// proxy: 'http://localhost:9999',
			// headers: {
				// 'host' : 'power.husqvarnagroup.com',
				// 'Pragma' : 'no-cache',
				// 'Cookie' : 'COUNTRY=US; GEOIP_COUNTRY=US;',
			
				// },
            // timeout: 30
        // },
		{
            name: 'Power via su00399 (Backend 1)',
			url: 'http://power.husqvarnagroup.com/webapp/wcs/stores/servlet/HomePageView?storeId=10201&catalogId=10051&langId=-1',
			proxy: 'http://su00399.hvwan.net:80',
			headers: {
				'host' : 'power.husqvarnagroup.com',
				'Pragma' : 'no-cache',
				'Cookie' : 'COUNTRY=US; GEOIP_COUNTRY=US;',
			
				},
            timeout: 30
        },
		{
            name: 'Power via su00400 (Backend 2)',
			url: 'http://power.husqvarnagroup.com/webapp/wcs/stores/servlet/HomePageView?storeId=10201&catalogId=10051&langId=-1',
			proxy: 'http://su00400.hvwan.net:80',
			headers: {
				'host' : 'power.husqvarnagroup.com',
				'Pragma' : 'no-cache',
				'Cookie' : 'COUNTRY=US; GEOIP_COUNTRY=US;',
			
				},
            timeout: 30
        },
		{
            name: 'Power via su00281-172 (TAM External1)',
			url: 'http://power.husqvarnagroup.com/webapp/wcs/stores/servlet/HomePageView?storeId=10201&catalogId=10051&langId=-1',
			proxy: 'http://su00281-172.hvwan.net:80',
			headers: {
				'host' : 'power.husqvarnagroup.com',
				'Pragma' : 'no-cache',
				'Cookie' : 'COUNTRY=US; GEOIP_COUNTRY=US;',
			
				},
            timeout: 30
        },
		{
            name: 'Power via su00281-173 (TAM External2)',
			url: 'http://power.husqvarnagroup.com/webapp/wcs/stores/servlet/HomePageView?storeId=10201&catalogId=10051&langId=-1',
			proxy: 'http://su00281-173.hvwan.net:80',
			headers: {
				'host' : 'power.husqvarnagroup.com',
				'Pragma' : 'no-cache',
				'Cookie' : 'COUNTRY=US; GEOIP_COUNTRY=US;',
			
				},
            timeout: 30
        },
		{
            name: 'Power via su00433-174 (TAM External4)',
			url: 'http://power.husqvarnagroup.com/webapp/wcs/stores/servlet/HomePageView?storeId=10201&catalogId=10051&langId=-1',
			proxy: 'http://webseal-hsq-174.hvwan.net:80',
			headers: {
				'host' : 'power.husqvarnagroup.com',
				'Pragma' : 'no-cache',
				'Cookie' : 'COUNTRY=US; GEOIP_COUNTRY=US;',
			
				},
            timeout: 30
        },
		{
            name: 'Power via su00433-173 (TAM External3)',
			url: 'http://power.husqvarnagroup.com/webapp/wcs/stores/servlet/HomePageView?storeId=10201&catalogId=10051&langId=-1',
			proxy: 'http://webseal-hsq-173.hvwan.net:80',
			headers: {
				'host' : 'power.husqvarnagroup.com',
				'Pragma' : 'no-cache',
				'Cookie' : 'COUNTRY=US; GEOIP_COUNTRY=US;',
			
				},
            timeout: 30
        },
        // {
            // name: 'PAID via Rev. Proxy',
			// url: 'http://paid.hvwan.net',
            // proxy: 'http://paid.hvwan.net:80',
			// headers: {
				// 'host' : 'paid.hvwan.net',
				// 'Pragma' : 'no-cache',
				// },
			// timeout: 30
        // }
    ],
    http = require('http'),
    server,
    port = process.env.PORT || 3008,
	monitors = [];
websites.forEach(function (website) {
    var monitor = new Ping ({
		name: website.name,
        website: website.url,
		proxy: website.proxy,
		headers: website.headers,
        timeout: website.timeout
    });
    monitors.push(monitor);
});
server = http.createServer(function (req, res) {
    var data = "Monitoring the following websites: \n \n" + websites.join("\n");
    res.end(data);
}); 
server.listen(port);
console.log('Listening to port %s', port);
