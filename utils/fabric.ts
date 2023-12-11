export function shortenFabricID(fabricId : number) {
	if(fabricId > 10000) {
		var firstDigit = fabricId.toString()[0];
		if(firstDigit === '1') {
			return fabricId % 10000;
		}
		if(firstDigit === '2') {
			return 'T' + (fabricId % 20000);
		}
		if(firstDigit === '3') {
			return 'K' + (fabricId % 30000);
		}
	}
	return fabricId;
};

export function getOriginalFabricID(shortenedId: string | number): number {
    if (typeof shortenedId === "string") {
        const prefix = shortenedId.slice(0, 1);
        const numberSuffix = parseInt(shortenedId.slice(1));

        switch (prefix) {
            case "T":
                return 20000 + numberSuffix;
            case "K":
                return 30000 + numberSuffix;
            default:
                return 10000 + parseInt(shortenedId);
        }
    } else {
        if (shortenedId > 10000) {
            const firstDigit = Math.floor(shortenedId / 10000);
            if (firstDigit === 1 || firstDigit === 2 || firstDigit === 3) {
                return firstDigit * 10000 + (shortenedId % 10000);
            }
        }
    }
    return shortenedId;
}

export function formatCompositionLabel(item : any) {
    let text = ""
    if(item.fiber_1 != null){
        text +=  `${item.fiber_1} ${item.fiber_1_percentage} %`
    }
    if(item.fiber_2 != null){
        text +=  `, ${item.fiber_2} ${item.fiber_2_percentage} %`
    }
    if(item.fiber_3 != null){
        text +=  `, ${item.fiber_3} ${item.fiber_3_percentage} % `
    }

    return text
}