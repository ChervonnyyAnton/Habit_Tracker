/*
	Дан произвольный url
    https://purpleschool.ru/course/javascript'
    Нужно сделать финкиию, которая выводит в консоль:
    Протокол (https)
    Доменное имя (purpleschool.ru)
    Путь внутри сайта (/course/javascript)
*/

const url = "https://purpleschool.ru/course/javascript";

function parseUrl(url) {
	if (typeof url !== "string") {
		throw new Error("Url must be a string");
	}
	
	if(!url.includes("://")) {
		throw new Error("Url must contain protocol");
	}

	const firstBatch = url.split("://");
	const protocol = firstBatch[0];

	if(!protocol.includes("s")) {
		console.log("Url must be secure");
	}

	const secondBatch = firstBatch[1].split("/");
    const domain = secondBatch[0];

	if(!domain.includes(".")) {
		throw new Error("Url must contain domain");
	}

	if(!firstBatch[1].includes("/")) {
		throw new Error("Url must contain path");
	}

	const path = "/" + secondBatch.slice(1).join("/");
	return { protocol, domain, path };
}

console.log(parseUrl(url));