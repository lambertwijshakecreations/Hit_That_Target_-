$(document).ready(function () {});

//functions
const showValue = function () {
	return $("input").val();
};

//Events

$("#spelTitle").click(function () {
	console.log($("#spelTitle").data());
	if ($("#spelTitle").data().state == "close") {
		$("#spelTitle").data().state = "open";
		$(".spelregels-container").slideUp();
	} else {
		$("#spelTitle").data().state = "close";
		$(".spelregels-container").slideDown();
	}
});

$("#input1").click(function () {
	showValue();
	$("#container1").hide();
	setTimeout(1000);
	$("#container2").show();

	if ($("#input1").val() == 50) {
		$("#result1").text(`HEEL GOED! Precies ${$("#input1").val()}%`);
	} else if ($("#input1").val() >= 45 && $("#input1").val() <= 55) {
		$("#result1").text(
			` Bijna! Je gok is ${$("#input1").val()}%, maar toch heel goed gedaan!`
		);
	} else {
		$("#result1").text(
			`AI! je gok was ${$("#input1").val()}%. Volgende Keer beter!. `
		);
	}
});

$("#input2").click(function () {
	showValue();
	$("#container2").hide();
	setTimeout(1000);
	$("#container3").show();

	if ($("#input2").val() == 25) {
		$("#result2").text(`HEEL GOED! Precies ${$("#input2").val()}%`);
	} else if ($("#input2").val() >= 20 && $("#input2").val() <= 30) {
		$("#result2").text(
			` Bijna! Je gok is ${$("#input2").val()}%, maar toch heel goed gedaan!`
		);
	} else {
		$("#result2").text(
			`AI! je gok was ${$("#input2").val()}%. Volgende Keer beter!. `
		);
	}
});

$("#input3").click(function () {
	showValue();
	$("#container3").hide();
	setTimeout(1000);
	$("#container4").show();

	if ($("#input3").val() == 75) {
		$("#result3").text(`HEEL GOED! Precies ${$("#input3").val()}%`);
	} else if ($("#input3").val() >= 70 && $("#input3").val() <= 80) {
		$("#result3").text(
			` Bijna! Je gok is ${$("#input3").val()}%, maar toch heel goed gedaan!`
		);
	} else {
		$("#result3").text(
			`AI! je gok was ${$("#input3").val()}%. Volgende Keer beter!. `
		);
	}
});

$("#input4").click(function () {
	showValue();
	$("#container4").hide();
	setTimeout(1000);
	$("#container5").show();

	if ($("#input4").val() == 30) {
		$("#result4").text(`HEEL GOED! Precies ${$("#input4").val()}%`);
	} else if ($("#input4").val() >= 25 && $("#input4").val() <= 35) {
		$("#result4").text(
			` Bijna! Je gok is ${$("#input4").val()}%,maar toch heel goed gedaan!`
		);
	} else {
		$("#result4").text(
			`AI! je gok was ${$("#input4").val()}%. Volgende Keer beter!. `
		);
	}
});

$("#input5").click(function () {
	showValue();
	$("#container5").hide();
	setTimeout(1000);
	$("#container6").show();

	if ($("#input5").val() == 90) {
		$("#result5").text(`HEEL GOED! Precies ${$("#input5").val()}%`);
	} else if ($("#input5").val() >= 85 && $("#input5").val() <= 95) {
		$("#result5").text(
			` Bijna! Je gok is ${$("#input5").val()}%, maar toch heel goed gedaan!`
		);
	} else {
		$("#result5").text(
			`AI! je gok was ${$("#input5").val()}%. Volgende Keer beter!. `
		);
	}
});

$("#input6").click(function () {
	showValue();
	$("#container6").hide();
	setTimeout(1000);
	$(".result-container").show();

	if ($("#input6").val() == 63) {
		$("#result6").text(`HEEL GOED! Precies ${$("#input6").val()}%`);
	} else if ($("#input6").val() >= 58 && $("#input6").val() <= 68) {
		$("#result6").text(
			` Bijna! Je gok is ${$("#input6").val()}%, maar toch heel goed gedaan!`
		);
	} else {
		$("#result6").text(
			`AI! je gok was ${$("#input6").val()}%. Volgende Keer beter!. `
		);
	}
});
