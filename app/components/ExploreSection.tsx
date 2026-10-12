"use client";
import { useState } from "react";
import Link from "next/link";

const kolkataPlaces = [
  { name: "Howrah Bridge", desc: "Iconic cantilever bridge over the Hooghly, one of the busiest in the world.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDxhBgvobR6HVzOKjKuvqxBb92Odx9Ul2s7W3VZBt0jA&s" },
  { name: "Victoria Memorial", desc: "Magnificent white marble monument built in memory of Queen Victoria, housing 28,934 artefacts.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMlSomyDtkyy_Lp8Brua4H7FqQp3nIEgFQfH-3j1dwTJ87G_MRnt2jX0k&s=10" },
  { name: "Dakshineswar", desc: "Famous Kali temple on the banks of the Hooghly, associated with Sri Ramakrishna Paramahamsa.", image: "https://www.trawell.in/admin/images/upload/555418100Kolkata_Dakshineswar_Kali_Temple_Main.jpg" },
  { name: "Kalighat Temple", desc: "One of the 52 Shakti Peethas of India, dedicated to Goddess Kali with a gold-tongued idol.", image: "https://www.trawell.in/admin/images/upload/555418767Kolkata_Kalighat_Temple_Main.jpg" },
  { name: "Belur Math", desc: "Headquarters of the Ramakrishna Math and Mission, blending Hindu, Islamic and Christian architecture.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYzpULQSpi9ml-J9AQoEOn-Ta4ecElj6ZqwTZkbQ-cqQ&s=10" },
  { name: "Indian Museum", desc: "Ninth-oldest museum in the world and largest in India, housing Egyptian mummies and ancient sculptures.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSyr1ss41U_i429KJ1TGq5wIVeqo-XoLBVZAYJLOtlZQcx29NWAAkRPgXR&s=10" },
  { name: "Eco Park New Town", desc: "475-acre urban park with Seven Wonders models, kayaking, zorbing, butterfly garden and eco island.", image: "https://ecoparknewtown.com/assets/frontend/img/Activites_Banner.jpg" },
  { name: "Jorasanko Thakurbari", desc: "Ancestral home and birthplace of Rabindranath Tagore, now Rabindra Bharati University and museum.", image: "https://www.trawell.in/admin/images/upload/564578118Kolkata_Jorsanko_Thakurbari_Main.jpg" },
  { name: "Princep Ghat", desc: "Scenic riverside ghat built in 1841, perfect for evening walks and boat rides on the Ganges.", image: "https://upload.wikimedia.org/wikipedia/commons/8/88/PrincepGhat.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original" },
  { name: "Park Street", desc: "The Street that Never Sleeps — Kolkata's foremost dining and nightlife district since the British era.", image: "https://khamconsultants.co.in/wp-content/uploads/2025/08/park_street_mansion_2.jpg" },
  { name: "Millennium Park", desc: "2.5 km riverside park on Strand Road with stunning views of Howrah Bridge and the Hooghly.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMeR7fW9gXh1-cV0HpD5BeeCr3MoivaWYkPW45xnMUuz60cjNILw42qpU&s=10" },
  { name: "Sovabazar Rajbari", desc: "17th-century royal palace famous for its grand Durga Puja celebrations since 1757.", image: "https://www.trawell.in/admin/images/upload/564578288Kolkata_Shobhabajar_Rajbari_Main.jpg" },
  { name: "Eden Gardens", desc: "Second-largest cricket stadium in India, established 1864 — the mecca of cricket in East India.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpsSiTrVILvhNQEiq1Gy1hRg5_Spw2HFwGEG2dh53tEw&s" },
  { name: "Birla Mandir", desc: "Magnificent white marble temple in Rajasthani style, dedicated to Lord Krishna and Radha.", image: "https://kolkatatourism.travel/images/v2/places-to-visit/birla-temple-kolkata-tourism-header.jpg" },
  { name: "ISKCON Kolkata", desc: "Beautiful Hare Krishna temple complex with stunning architecture and spiritual ambience.", image: "https://temple.yatradham.org/public/Product/temple/temple_w7fQ71G7_202507051748590.webp" },
  { name: "Marble Palace", desc: "19th-century neo-classical mansion housing a private collection of European paintings and sculptures.", image: "https://upload.wikimedia.org/wikipedia/commons/8/84/Marble_Palace-_Kolkata-_West_Bengal-_DSC_0006.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original" },
  { name: "Nakhoda Masjid", desc: "Grand mosque in the heart of Kolkata, built in 1926 modelled after Akbar's tomb in Agra.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTznNtFd7av4WNo6o5PqBn3kb1xUMzYKR36B8hnheX6FtHFJpSRREj-AJI&s=10" },
  { name: "Kumartuli", desc: "The potters' quarter of North Kolkata where artisans craft the iconic clay idols for Durga Puja.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ3nHx4Wpz62kTUty6Y-54HkRpufubO7L4dLmV_HkoEg&s=10" },
  { name: "Armenian Church", desc: "One of the oldest churches in Kolkata, built in 1724 by the Armenian community.", image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Armenian_Church%2C_Calcutta_%28Kolkata%29_04.JPG?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original" },
  { name: "St. Paul's Cathedral", desc: "Gothic-style Anglican cathedral built in 1847, one of the finest examples of colonial architecture.", image: "https://upload.wikimedia.org/wikipedia/commons/4/4d/St_Paul%27s_Cathedral.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original" },
  { name: "Babughat", desc: "Historic ghat on the Hooghly River, a popular spot for morning rituals and riverside walks.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUB5mV_VzqknXmdaMZHD_LuMf1A4hi3LAOeimfUYP2QQWfTWgwQZDAZ9Y&s=10" },
  { name: "Outram Ghat", desc: "Scenic ghat near the Princep Ghat area, offering beautiful views of the Hooghly River.", image: "https://s7ap1.scene7.com/is/image/incredibleindia/outram-ghat-kolkata-west-bengal-1-attr-hero?qlt=82&ts=1742152862113" },
  { name: "Jagannath Ghat", desc: "One of the oldest ghats in Kolkata, associated with the Jagannath Temple and river festivals.", image: "https://c8.alamy.com/comp/F3FJ9J/jagannath-ghat-howrah-bridge-calcutta-west-bengal-india-F3FJ9J.jpg" },
  { name: "The Mother House", desc: "Headquarters of the Missionaries of Charity founded by Mother Teresa, and her final resting place.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvFjlVIanjcFl_6xx-pLgM2A-RucbgBb-7PPuXMfGNt3FHoKT2KTY_YAPD&s=10" },
  { name: "Rabindra Sadan", desc: "Premier cultural auditorium of Kolkata, inaugurated by PM Nehru in 1961, venue for Kolkata Film Festival.", image: "https://kolkatatourism.travel/images/places-to-visit/headers/rabindra-sadan-kolkata-header-kolkata-tourism.jpg.jpg" },
  { name: "Itachuna Rajbari", desc: "A 400-year-old heritage palace near Kolkata offering royal homestay experience with Durga Puja celebrations.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIe3oiXycetX8m73ZDHTWzqeTunNuNCviNVChlgu41F2aid2CTjB3cEoI&s=10" },
  { name: "The Rajbari Bawali", desc: "Restored 200-year-old zamindar mansion turned luxury heritage hotel, 35 km from Kolkata.", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/cd/c2/2d/the-rajbari-bawali.jpg?w=900&h=500&s=1" },
  { name: "Furfura Sharif", desc: "Important Islamic pilgrimage site in Hooghly district, visited by millions of devotees annually.", image: "https://upload.wikimedia.org/wikipedia/commons/5/56/Furfura_Mazar.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original" },
  { name: "Tarakeshwar", desc: "Famous Shiva temple town about 58 km from Kolkata, one of the most visited pilgrimage sites in Bengal.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM8rqJIEOp2f5kZSKHZhNULNKL4IozgbT_GugJq7mB_hUT9V2bcdUknA0&s=10" },
  { name: "Serampore", desc: "Historic Danish colonial town on the Hooghly, known for its heritage buildings and Serampore College.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWzNR5i9d4IzKLZWicwdVfdhWU18AylY87_1gqBKPMVLweqqX9vLYGHmZk&s=10" },
  { name: "Chandannagar", desc: "Former French colony on the Hooghly with beautiful promenade, Strand, and French heritage buildings.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyhkM-S6EWTZklQESI8w_R6XwRgVZxtqqSg7LFzbUoKA&s=10" },
  { name: "Chinsurah", desc: "Former Dutch settlement with historic churches, mosques and colonial architecture on the Hooghly.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEcDqZgpsnNQk7rPJLJqjFWejCSh3GQndeTbfHZYUa5Q&s=10" },
  { name: "Bandel Church", desc: "One of the oldest churches in India, built by Portuguese missionaries in 1599 on the Hooghly.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK6efSdSkK6ImcjwSlLEMQr0SyIl5uvUkX5JVHFsdxracerUiEcDkqmprq&s=10" },
  { name: "ISKCON Mayapur", desc: "Spiritual headquarters of ISKCON on the banks of the Ganges, birthplace of Sri Chaitanya Mahaprabhu.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcCp9WFL8E1r14Md-3oZlazeKeZ5t8lRfezKvyxKAA2FNbHfV3PNdELFMP&s=10" },
  { name: "Legends of Bengal", desc: "A unique cultural museum showcasing the rich heritage, art, and legends of Bengal.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUloGi9wiOw9pDct877yZY84M0ecU_3qR_x1UGANqj_20idYYGfDmngCVA&s=10" },
];

const outstationPlaces = [
  { name: "Darjeeling", slug: "darjeeling", desc: "Queen of the Hills — Toy Train, Tiger Hill sunrise, tea gardens and Kanchenjunga views.", image: "https://www.tourmyindia.com/states/sikkim/image/eastern-mystery-s2.webp" },
  { name: "Kalimpong", slug: "kalimpong", desc: "Serene hill town with Buddhist monasteries, Lava, Lolegaon and stunning Himalayan views.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStXiR5HiQi3vTl1BN0EQXbbQYF6WpsuXd9wE8vQHMgqA&s=10" },
  { name: "Dooars", slug: "dooars", desc: "Gateway to Bhutan — Gorumara, Jaldapara, one-horned rhinos and dense jungle safaris.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYPmMwqk5KYxX_krQCsjIqcC1DKXPaA9wwPJWYZq2RKkQ50-Xc8XtJum1R&s=10" },
  { name: "Sundarbans", slug: "sundarbans", desc: "World's largest mangrove delta — Royal Bengal Tiger, boat safaris and UNESCO heritage.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYPmMwqk5KYxX_krQCsjIqcC1DKXPaA9wwPJWYZq2RKkQ50-Xc8XtJum1R&s=10" },
  { name: "Digha", slug: "digha", desc: "Bengal's favourite beach — wide sandy shores, Mandarmani, Shankarpur and Talsari.", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/00/60/71/digha-beach.jpg?w=900&h=500&s=1" },
  { name: "Santiniketan", slug: "santiniketan", desc: "Tagore's Abode of Peace — Visva-Bharati, Sonajhurir Haat, Baul music and Poush Mela.", image: "https://assets.cntraveller.in/photos/60ba1e65e1b212c19a817cea/master/w_1600%2Cc_limit/Bengal-tagore.jpg" },
  { name: "Bishnupur", slug: "bishnupur", desc: "Temple town of terracotta — Rasmancha, Baluchari sarees, Dokra craft and classical music.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvgENW0flSgasVPBVEwT27dWE1s-USdX90T65lFfeFJg&s=10" },
  { name: "Purulia", slug: "purulia", desc: "Land of red soil — Chhau dance, Ayodhya Hills, tribal culture and Bamni Falls.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdN3zQhO1zT_vOeeX_GYEwKlfEEiD_E82gXuyqt8E4g-0S2ZXGDvHiwwNH&s=10" },
  { name: "Kolkata", slug: "kolkata", desc: "City of Joy — Victoria Memorial, Howrah Bridge, Durga Puja and colonial heritage.", image: "https://s7ap1.scene7.com/is/image/incredibleindia/howrah-bridge-howrah-west-bengal-city-1-hero?qlt=82&ts=1742154305591" },
  { name: "Murshidabad", desc: "Former capital of Bengal — Hazarduari Palace, Imambara and Nawabi heritage.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEh9eztjPDnDTVVJPdizb7jzBAnjqUrdj1KZ6bavM7wA&s" },
  { name: "Malda", desc: "Historic town known for Gaur and Pandua ruins, mango orchards and silk weaving.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScIusdbvtx3_gtLU3xOnHhzNmslQ8Fznklr7H4-vo6hQ&s=10" },
  { name: "Cooch Behar", desc: "Royal town with the magnificent Cooch Behar Palace and rich cultural heritage.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2KW1KL7OHrGsTJQ3zSHTpwnTs1Qalj90FvAg5x67WCA&s=10" },
  { name: "Mandarmani", desc: "Longest motorable beach in India with red crabs, beach drives and seafood resorts.", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80" },
  { name: "Tajpur", desc: "Quiet beach village near Digha, ideal for a peaceful coastal getaway.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3woGpy1yzntDA0uy3xk81Ho9RPm6SDsLHXh4pxftDJQ&s=10" },
  { name: "Shankarpur", desc: "Serene fishing village beach near Digha with a large harbour and natural beauty.", image: "https://lh5.googleusercontent.com/p/AF1QipMVTL4AB60fZTu2W45ca8-mu5GwbXnxAG8AR1yK=s1600" },
  { name: "Mirik", desc: "Charming hill town with Sumendu Lake, tea gardens and views of Kanchenjunga.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP0XxQdTwPcmc2nNu_yb_GcoaJHF4SFYqfLjOvIs6mMvVP0A7G2Y_9BE8&s=10" },
  { name: "Sandakphu", desc: "Highest peak in West Bengal at 3,636m — the only place to see four 8000m peaks together.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5970XuNpPD0LihOH03LpTGKneMeOnX0D2eG7wxvYmkA&s=10" },
  { name: "Phalut", desc: "Second highest peak in West Bengal, offering panoramic views of the Himalayan range.", image: "https://www.travelwithsusmita.com/wp-content/uploads/2023/02/1-DSCN1677.jpg" },
  { name: "Mukutmanipur", desc: "Tribal village at the confluence of Kansabati and Kumari rivers with India's second largest earth dam.", image: "https://www.visitnortheast.com/gallery/pages/ee0b7d1975b4df96c4df716e92318b64.webp" },
  { name: "Tarapith", desc: "Famous Shakti temple town dedicated to Goddess Tara, an important pilgrimage site in Bengal.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2yCmCA6uKp8Z7gXaq1eqgwog7yUXm1MZByiHhtf704A&s=10" },
  { name: "Jhargram", desc: "Tribal heritage town in Jungle Mahal with forests, palaces and eco-tourism.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd0B5BVxQhh9BlacFmN0d9E580_PLyGhNLvFZ-HHVg0M_nCqb2UX1oErJT&s=10" },
  { name: "Bankura", desc: "Cultural hub known for Bishnupur temples, Bankura horse terracotta and tribal art.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1NqelngJNEu8C04FwEQRoDZOSOlYQsa32C8XxDM82nQ&s=10" },
  { name: "Bardhaman", desc: "Historic city known for Curzon Gate, Sher Afghan's tomb and the famous Mihidana sweets.", image: "https://www.noblehousetours.com/wp-content/uploads/2018/02/108-shiva-mandir-bardhaman.jpg" },
  { name: "Krishnanagar", desc: "Famous for Jagaddhatri Puja and the exquisite clay doll craft of Ghurni.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsBcI90bM9Fnbg6fgueyB3fgh-4XBa5_F0r7-o-17A4A&s=10" },
];

export default function ExploreSection() {
  const [tab, setTab] = useState<"kolkata" | "outstation">("outstation");

  return (
    <section className="section-pad" style={{ background: "#fff" }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <span className="badge badge-blue mb-3">Discover More</span>
          <h2 className="section-title">Explore Every Corner of Bengal</h2>
          <p className="section-subtitle mt-3">From Kolkata's iconic landmarks to Bengal's most beautiful outstation destinations.</p>
        </div>

        {/* Tab Toggle */}
        <div className="flex justify-center mb-8">
          <div className="flex rounded-full p-1" style={{ background: "#E1F5EE", border: "1px solid #9FE1CB" }}>
            <button onClick={() => setTab("outstation")}
              className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all"
              style={{ background: tab === "outstation" ? "#0F6E56" : "transparent", color: tab === "outstation" ? "#fff" : "#0F6E56" }}>
              🗺️ Outstation
            </button>
            <button onClick={() => setTab("kolkata")}
              className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all"
              style={{ background: tab === "kolkata" ? "#0F6E56" : "transparent", color: tab === "kolkata" ? "#fff" : "#0F6E56" }}>
              🌆 Kolkata City
            </button>
          </div>
        </div>

        {/* Outstation Grid */}
        {tab === "outstation" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {outstationPlaces.map(p => (
              <div key={p.name}>
                {"slug" in p ? (
                  <Link href={`/destinations/${p.slug}`} className="relative overflow-hidden rounded-2xl h-44 group block" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.10)" }}>
                    <img src={p.image} alt={p.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white font-semibold text-sm flex items-center gap-1">{p.name} <span style={{ color: "#5DCAA5" }}>→</span></p>
                      <p className="text-white/70 text-xs mt-0.5 leading-relaxed line-clamp-2">{p.desc}</p>
                    </div>
                  </Link>
                ) : (
                  <div className="relative overflow-hidden rounded-2xl h-44 group" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.10)" }}>
                    <img src={p.image} alt={p.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white font-semibold text-sm">{p.name}</p>
                      <p className="text-white/70 text-xs mt-0.5 leading-relaxed line-clamp-2">{p.desc}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Kolkata Grid — image background cards */}
        {tab === "kolkata" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {kolkataPlaces.map(p => (
              <div key={p.name}
                className="relative overflow-hidden rounded-2xl h-44 group cursor-pointer"
                style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.10)" }}>
                {/* Background Image */}
                <img
                  src={p.image}
                  alt={p.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
                {/* Text */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-semibold text-sm">{p.name}</p>
                  <p className="text-white/70 text-xs mt-0.5 leading-relaxed line-clamp-2">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
