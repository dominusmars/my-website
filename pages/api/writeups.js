import axios from 'axios'
export default async function handler(req, res) {
    var result = [];
    var resedInfo = await axios.get('https://api.github.com/repos/dominusmars/Write-ups/contents/')
    var info = resedInfo.data
    for (let index = 0; index < info.length; index++) {
        const element = info[index];
        var data = await axios.get(element.download_url)
        result.push({
            'name': element.name,
            "data": data.data
        })
    }
    res.status(200).json(result)
}
