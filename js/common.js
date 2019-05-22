function StageParse(stage_name)
{
	var stagedata;
	$.ajax({
		url: "https://raw.githubusercontent.com/ImpMK/lastorigin_helper/master/area.json",
		dataType:'json',
        async: false,
        success: function (data)
        {
			var areanum=Number(stage_name.split('-')[0]);
			var stagecode=stage_name.split('-')[1];
			if(stagecode.endsWith('B'))
			{
				var stagenum=Number(stagecode.slice(0,-1));
				stagedata=data[areanum-1].bstage[stagenum-1];
			}
			else if(stagecode.endsWith('Ex'))
			{
				var stagenum=Number(stagecode.slice(0,-2));
				stagedata=data[areanum-1].exstage[stagenum-1];
			}
			else
			{
				var stagenum=Number(stagecode);
				stagedata=data[areanum-1].normalstage[stagenum-1];
			}
        },
        error: function (e) {
            alert("error");
        }
    });
	
	return stagedata;
}

function EnemyParse(enemy_name)
{
	var enemydata;
	$.ajax({
		url: "https://raw.githubusercontent.com/ImpMK/lastorigin_helper/master/enemy.json",
		dataType:'json',
        async: false,
        success: function (data)
        {
            enemydata=data.filter(function(data){ return data.name==enemy_name; });
        },
        error: function (e) {
            alert("error");
        }
    });
	
	return enemydata[0];
}

function GetURLParameter(sParam)
{
	var sPageURL = window.location.search.substring(1);
	var sURLVariables = sPageURL.split('&');
	for (var i = 0; i < sURLVariables.length; i++)
	{
		var sParameterName = sURLVariables[i].split('=');
		if (sParameterName[0] == sParam) {return sParameterName[1];}
	}
}