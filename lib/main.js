

function main(bottle=99) {
    function introduce() {
        if (bottle) {
            return `${bottle} ${unit} of beer on the wall, ${bottle} ${unit} of beer.`;
        }else{
            return 'No more bottles of beer on the wall, no more bottles of beer.'
        }
    }

    function buySomeMore() {

        return 'Go to the store and buy some more, 99 bottles of beer on the wall.';
    }

    function takeOneDown() {
        bottle--;
        if(bottle===1){
            unit='bottle';
        }
        let result = '';
        if (bottle) {
            result += `Take one down and pass it around, ${bottle} ${unit} of beer on the wall.`;
        } else {
            result += 'Take one down and pass it around, no more bottles of beer on the wall.';
        }
        return result;
    }

    let unit='bottles';
    let result='';
    while (bottle) {
        result+=introduce()+'\n';
        result+=takeOneDown()+'\n';
    }
    result+=introduce()+'\n';
    result+=buySomeMore();
    return result
}

module.exports = main;