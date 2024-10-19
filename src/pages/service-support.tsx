import { useState, useCallback, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

interface Location {
    name: string
    position: [number, number]
    color?: string
}

const MapComponent = dynamic(() => import('../components/MapService'), {
    ssr: false,
})

export default function ServiceSupport() {
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedLocation, setSelectedLocation] = useState<Location | null>(null)

    const locations: Location[] = [
        { name: "Jakarta", position: [-6.2088, 106.8456] },
        { name: "Bogor", position: [-6.5971, 106.8060] },
        { name: "Depok", position: [-6.4025, 106.7942] },
        { name: "Tangerang", position: [-6.1781, 106.6300] },
        { name: "Bekasi", position: [-6.2349, 107.0003] },
        { name: "Cikarang", position: [-6.3920, 107.1542] },
        { name: "Cibinong", position: [-6.4814, 106.8319] },
        { name: "Karawang", position: [-6.3027, 107.3018] },
        { name: "Bandung", position: [-6.9175, 107.6191] },
        { name: "Ciamis", position: [-7.3268, 108.3485] },
        { name: "Cianjur", position: [-6.8182, 107.1449] },
        { name: "Tarogong", position: [-7.1968, 107.8963] },
        { name: "Indramayu", position: [-6.3373, 108.3207] },
        { name: "Soreang", position: [-7.0252, 107.5186] },
        { name: "Ngamprah", position: [-6.8438, 107.5513] },
        { name: "Kuningan", position: [-6.9757, 108.4833] },
        { name: "Majalengka", position: [-6.8367, 108.2288] },
        { name: "Parigi", position: [-7.7070, 108.4901] },
        { name: "Purwakarta", position: [-6.5569, 107.4337] },
        { name: "Subang", position: [-6.5708, 107.7634] },
        { name: "Sumedang", position: [-6.8561, 107.9233] },
        { name: "Singaparna", position: [-7.3516, 108.1110] },
        { name: "Banjar", position: [-7.3679, 108.5342] },
        { name: "Cimahi", position: [-6.8841, 107.5413] },
        { name: "Sukabumi", position: [-6.9277, 106.9300] },
        { name: "Tasikmalaya", position: [-7.3274, 108.2207] },
        { name: "Surabaya", position: [-7.2575, 112.7521] },
        { name: "Malang", position: [-7.9666, 112.6326] },
        { name: "Sidoarjo", position: [-7.4478, 112.7183] },
        { name: "Mojokerto", position: [-7.4704, 112.4401] },
        { name: "Pasuruan", position: [-7.6469, 112.9063] },
        { name: "Probolinggo", position: [-7.7569, 113.2117] },
        { name: "Batu", position: [-7.8831, 112.5334] },
        { name: "Blitar", position: [-8.0955, 112.1609] },
        { name: "Kediri", position: [-7.8479, 112.0168] },
        { name: "Madiun", position: [-7.6311, 111.5137] },
        { name: "Bangkalan", position: [-7.0250, 112.7491] },
        { name: "Banyuwangi", position: [-8.2191, 114.3691] },
        { name: "Kanigoro", position: [-8.1302, 112.2170] },
        { name: "Bojonegoro", position: [-7.1502, 111.8817] },
        { name: "Bondowoso", position: [-7.9085, 113.8219] },
        { name: "Gresik", position: [-7.1510, 112.6526] },
        { name: "Jember", position: [-8.1845, 113.6681] },
        { name: "Jombang", position: [-7.5462, 112.2267] },
        { name: "Pamenang", position: [-7.7056, 111.4558] },
        { name: "Lamongan", position: [-7.1195, 112.4141] },
        { name: "Lumajang", position: [-8.1337, 113.2226] },
        { name: "Caruban", position: [-7.5506, 111.6612] },
        { name: "Magetan", position: [-7.6556, 111.3280] },
        { name: "Kepanjen", position: [-8.1330, 112.5687] },
        { name: "Mojosari", position: [-7.5469, 112.5336] },
        { name: "Ngajuk", position: [-7.6050, 111.8982] },
        { name: "Ngawi", position: [-7.4040, 111.4445] },
        { name: "Pacitan", position: [-8.1911, 111.1019] },
        { name: "Pamekasan", position: [-7.1619, 113.4826] },
        { name: "Bangil", position: [-7.5989, 112.8186] },
        { name: "Ponorogo", position: [-7.8669, 111.4666] },
        { name: "Kraksaan", position: [-7.7622, 113.4018] },
        { name: "Sampan", position: [-7.1894, 113.2537] },
        { name: "Situbondo", position: [-7.7056, 114.0094] },
        { name: "Sumenep", position: [-7.0167, 113.8667] },
        { name: "Trenggalek", position: [-8.0502, 111.7062] },
        { name: "Tuban", position: [-6.8967, 112.0403] },
        { name: "Tulungagung", position: [-8.0666, 111.9027] },
        { name: "Solo", position: [-7.5755, 110.8243] },
        { name: "Yogyakarta", position: [-7.7956, 110.3695] },
        { name: "Semarang", position: [-6.9932, 110.4203] },
        { name: "Magelang", position: [-7.4797, 110.2177] },
        { name: "Pekalongan", position: [-6.8898, 109.6746] },
        { name: "Salatiga", position: [-7.3305, 110.5084] },
        { name: "Tegal", position: [-6.8797, 109.1256] },
        { name: "Banjarnegara", position: [-7.3964, 109.6916] },
        { name: "Purwokerto", position: [-7.4242, 109.2337] },
        { name: "Batang", position: [-6.9075, 109.7306] },
        { name: "Blora", position: [-6.9711, 111.4148] },
        { name: "Boyolali", position: [-7.5319, 110.5959] },
        { name: "Cilacap", position: [-7.7267, 109.0090] },
        { name: "Brebes", position: [-6.8718, 109.0426] },
        { name: "Demak", position: [-6.8944, 110.6379] },
        { name: "Purwodadi", position: [-7.0868, 110.9158] },
        { name: "Jepara", position: [-6.5927, 110.6676] },
        { name: "Karanganyar", position: [-7.5986, 110.9539] },
        { name: "Kebumen", position: [-7.6683, 109.6507] },
        { name: "Kendal", position: [-6.9175, 110.2027] },
        { name: "Klaten", position: [-7.7016, 110.6029] },
        { name: "Kudus", position: [-6.8048, 110.8405] },
        { name: "Pati", position: [-6.7559, 111.0386] },
        { name: "Pemalang", position: [-6.8898, 109.3799] },
        { name: "Purbalingga", position: [-7.3860, 109.3668] },
        { name: "Purworejo", position: [-7.7130, 110.0085] },
        { name: "Rembang", position: [-6.7080, 111.3420] },
        { name: "Ungaran", position: [-7.1397, 110.4047] },
        { name: "Sragen", position: [-7.4278, 111.0179] },
        { name: "Sukoharjo", position: [-7.6809, 110.8410] },
        { name: "Slawi", position: [-6.9858, 109.1357] },
        { name: "Tenggangung", position: [-7.3153, 110.1685] },
        { name: "Wonogiri", position: [-7.8138, 110.9239] },
        { name: "Wonosobo", position: [-7.3636, 109.9003] },
        { name: "Denpasar", position: [-8.6500, 115.2167] },
        { name: "Badung", position: [-8.5826, 115.1770] },
        { name: "Bangli", position: [-8.4544, 115.3546] },
        { name: "Singaraja", position: [-8.1120, 115.0884] },
        { name: "Gianyar", position: [-8.5449, 115.3246] },
        { name: "Negara", position: [-8.3578, 114.6275] },
        { name: "Amlapura", position: [-8.4534, 115.5669] },
        { name: "Semarapura", position: [-8.5352, 115.4024] },
        { name: "Tabanan", position: [-8.5446, 115.1333] },
        { name: "Kota Batam", position: [1.1301, 104.0529] },
        { name: "Lampung", position: [-5.4501, 105.2667] },
        { name: "Palembang", position: [-2.9761, 104.7754] },
        { name: "Pekanbaru", position: [0.5071, 101.4478] },
        { name: "Medan", position: [3.5952, 98.6722] },
        { name: "Samarinda", position: [-0.5022, 117.1536] },
        { name: "Balikpapan", position: [-1.2379, 116.8529] },
        { name: "Makassar", position: [-5.1477, 119.4327] },
        { name: "Manado", position: [1.4748, 124.8421] },
        { name: "Mataram", position: [-8.5833, 116.1167] }
    ]

    const handleSearch = useCallback(() => {
        const foundLocation = locations.find(
            location => location.name.toLowerCase() === searchTerm.toLowerCase()
        )
        setSelectedLocation(foundLocation || null)
    }, [searchTerm, locations])

    useEffect(() => {
        if (searchTerm === '') {
            setSelectedLocation(null)
        }
    }, [searchTerm])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
        if (e.target.value === '') {
            setSelectedLocation(null)
        }
    }

    const onEnter = (e: { key: string }) => {
        if (e.key === 'Enter') {
            handleSearch()
        }
    }

    return (
        <div className="flex flex-col items-center m-3">
            <h2 className="text-3xl font-bold leading-10 text-primary-blue text-center">
                Services & Support
            </h2>
            <div className="mt-1.5 text-base leading-6 text-black text-center mb-4">
                We have more than 100 service points across Indonesia
            </div>
            <div className="w-full max-w-md mb-6 flex">
                <Input
                    type="text"
                    placeholder="Search for a city..."
                    value={searchTerm}
                    onChange={handleInputChange}
                    className="flex-grow"
                    onKeyPress={onEnter}
                />
                <Button onClick={handleSearch} className="ml-2 bg-primary-blue">
                    <Search className="h-4 w-4" />
                    <span className="sr-only">Search</span>
                </Button>
            </div>
            {selectedLocation && (
                <div className="mb-4 text-center">
                    <p className="text-lg text-black">
                        Service Center found in <span className="text-primary-blue font-bold">{selectedLocation.name}</span>
                    </p>
                </div>
            )}
            <MapComponent 
                locations={selectedLocation ? [selectedLocation] : locations} 
                center={selectedLocation ? selectedLocation.position : undefined}
                zoom={selectedLocation ? 10 : 5}
                selectedLocation={selectedLocation}
            />
        </div>
    )
}