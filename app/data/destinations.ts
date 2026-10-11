export interface Attraction {
  name: string;
  description: string;
  image?: string;
}

export interface Destination {
  slug: string;
  name: string;
  tagline: string;
  heroImage: string;
  about: string;
  howToReach: {
    air?: string;
    train?: string;
    road?: string;
  };
  attractions: Attraction[];
  stay: string;
  mapEmbed: string;
}

export const destinations: Destination[] = [
  {
    slug: "kalimpong",
    name: "Kalimpong",
    tagline: "The Land of Monasteries & Mountain Views",
    heroImage: "https://c.ndtvimg.com/2026-05/4ss1qk6g_travel_625x300_12_May_26.png?im=FeatureCrop,algorithm=dnn,width=400,height=225&q=70",
    about: "Kalimpong is a serene hill town in West Bengal, nestled in the foothills of the Eastern Himalayas at an altitude of about 1,250 meters. Known for its Buddhist monasteries, vibrant flower nurseries, and stunning views of Kanchenjunga, Kalimpong offers a quieter and more offbeat alternative to Darjeeling. The town is a melting pot of Nepali, Tibetan, Lepcha, and Bengali cultures, making it a unique destination for heritage, nature, and adventure seekers alike.",
    howToReach: {
      air: "Nearest airport is Bagdogra Airport (IXB), about 80 km from Kalimpong. Taxis and shared cabs are available from Bagdogra to Kalimpong.",
      train: "Nearest railway station is New Jalpaiguri (NJP), about 75 km away. Regular taxis and shared jeeps connect NJP to Kalimpong.",
      road: "Kalimpong is about 75 km from Siliguri via NH10. Regular buses and taxis are available from Siliguri, NJP, and Darjeeling."
    },
    attractions: [
      {
        name: "Army Golf Club",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/17/73/d6/army-golf-course.jpg?w=1100&h=1100&s=1",
        description: "Located among the hilly terrains of Durpin Dara, this 18-hole Army golf course is maintained by the Indian Army. The surrounding areas are covered with Oaks, Dhupi (Cryptomeria Japonica), and Cypress trees. The majestic Mt. Kanchenjunga is visible in the backdrop, making it a surreal experience for nature lovers."
      },
      {
        name: "Lava",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5EaQ5ZgSWB5lYoAsHY4fpvtHV-0QJugBPPjfa55Yim3ll_mOarc606o&s=10",
        description: "A small hamlet town about 33 km from Kalimpong, surrounded by pine forests and often engulfed in mists. Situated at 2,350 meters, it hosts a beautiful Bhutanese monastery and a Nature Interpretation Centre. Lava is the starting point for treks into Neora Valley National Park and is renowned for bird watching. The Sherpa View Point offers excellent views of snow-crested mountains of Bhutan and Tibet."
      },
      {
        name: "Rachela Pass",
        image: "https://himalayatrekker.com/wp-content/uploads/2021/02/mountain-views-from-upper-chisang-kalimpong.jpg",
        description: "A 12 km trekking route from Lava through the Neora Valley Nature Reserve. The steep route offers scenic beauty of magnolias, rhododendrons, and bamboo trees. The highest point is the Rachela top — a tri-junction between Sikkim, West Bengal, and Bhutan. The region is also a natural habitat for Red Panda and Tigers."
      },
      {
        name: "Lolegaon",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs1EmwfwgfXiPy4EfzvEzBpVsgOvW22LLy_sXR0dCUbnGjK3eFbeZr4AQ&s=10",
        description: "A small peaceful village at the far end of the Himalayan Ridge, popular for its beautiful landscapes and serene views of Kanchenjunga. Famous for its Canopy Walk — a hanging bridge in the middle of a forest of oak, fir, birch, and cypress trees. Lolegaon offers several small treks and trails, ideal for unwinding away from city life."
      },
      {
        name: "Changey Waterfalls",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyWtW-Z-K88Rqi2v35Y_8EQi_5Risrt2r38zS-mFHFKg&s=10",
        description: "One of the must-visit exotic locations near Lava. The waterfall cascades down from a height of about 150 feet amidst hills and forests. Exotic birds such as White Capped Water Redstart, Verditer Flycatcher, Niltava, Blue Fronted Redstart, and Blue Whistling Thrush can be spotted here."
      },
      {
        name: "Neora Valley National Park",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ28Di8r_aeYThCdSLoy9LtLK9FUF2fwz9DjHezeoeQKCiN8wavOAWMzuJm&s=10",
        description: "One of the most endowed biological zones in the Himalayas, spread over 88 sq. km near Lava. Bordered by Sikkim and Bhutan, it houses diverse animals and birds including the golden headed black finch, blind snake, and king cobra. A popular picnic spot for families and wildlife enthusiasts."
      },
      {
        name: "Rishop",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/76/b8/3b/rishyap.jpg?w=1400&h=-1&s=1",
        description: "Located at the junction of Sikkim, West Bengal, and Bhutan, Rishop's unique feature is the unobstructed view between this tiny hamlet and the Kangchenjunga range. The village offers breathtaking views of Kangchenjunga and various mountain peaks of India and Nepal, with cozy homestays for a comfortable stay."
      },
      {
        name: "Tiffin Dara",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReWuNIWYL1ICj-UrRz6Y4gkDNuJsSEjnzhY6xV25lJtckAAEGu9tzeCIgS&s=10",
        description: "A famous viewpoint in the Kolbong forest range of the Eastern Himalayas, known for its 360-degree uninterrupted view of Kanchenjunga. Reached by trekking through a dense forest trail, the route offers the enchanting experience of birdsong and the crunch of dried leaves underfoot."
      },
      {
        name: "Ramitey Viewpoint",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcEWHJLsmrVArOF3fBZOjQweDt_DvDh6fwIli7yMiwpkQCoRBKx-M0Mj4&s=10",
        description: "Located on the Darjeeling–Kalimpong route at about 6,400 feet, Ramitey Viewpoint offers mesmerizing views of both Mt. Kanchenjunga above and the Teesta River below. Accessible through Sillerygoan, it provides the longest view of the Teesta as it meanders through 14 bends in the valley."
      },
      {
        name: "Samthar Plateau",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/07/27/e0/2a/samthar-plateau.jpg",
        description: "Located at 1,400m in the Himalayan foothills, Samthar Plateau features terraced fields, mountain streams, and thatch huts. Popular for bird watching and nature lovers, the hiking routes through mountains and coniferous forests give an enthralling experience of the Himalayas."
      }
    ],
    stay: "Kalimpong offers heritage hotels, cozy homestays, and budget guesthouses. Popular areas to stay include Main Road, Durpin Dara, and Deolo Hill. We offer Car + Hotel packages from NJP/Bagdogra starting at ₹4,499 per person including pickup, hotel stay, and sightseeing by dedicated car.",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56729.0!2d88.4686!3d27.0660!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e431f00000001%3A0x1!2sKalimpong%2C+West+Bengal!5e0!3m2!1sen!2sin!4v1"
  },
  {
    slug: "darjeeling",
    name: "Darjeeling",
    tagline: "Queen of the Hills",
    heroImage: "https://www.sterlingholidays.com/blog/wp-content/uploads/2024/12/Darjeeling-Winter-Campaign-Blog.jpg",
    about: "Darjeeling, often called the 'Queen of the Hills', is a charming hill station nestled in the foothills of the Himalayas in West Bengal. Famous for its tea gardens, the iconic Toy Train, and breathtaking views of Kanchenjunga, Darjeeling is one of India's most beloved destinations. The town sits at an altitude of about 2,042 meters and offers a perfect blend of natural beauty, colonial heritage, and vibrant local culture.",
    howToReach: {
      air: "Nearest airport is Bagdogra Airport (IXB), about 67 km from Darjeeling. From Bagdogra, taxis and shared jeeps are available to Darjeeling.",
      train: "Nearest major railway station is New Jalpaiguri (NJP), about 74 km away. The famous Darjeeling Himalayan Railway (Toy Train) also connects Darjeeling to NJP.",
      road: "Darjeeling is well connected by road from Siliguri (77 km), NJP (74 km), and Kolkata (600 km). Regular buses and taxis are available."
    },
    attractions: [
      {
        name: "Tiger Hill",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
        description: "Situated at an altitude of 2,590 meters and 13km from Darjeeling town, Tiger Hill offers an unparalleled view of sunrise from behind Kanchenjunga. On a clear day, Mount Everest is also visible. The sunlight reflected on snow-capped mountains creates a unique palette of colours that even the best cameras fail to capture."
      },
      {
        name: "Batasia Loop",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80",
        description: "A spiral railway created to lower the gradient of ascent of the Darjeeling Himalayan Railway. From here, one can witness a spectacular view of Mt. Kanchenjunga and watch the remarkable engineering marvel of DHR where the railway line negotiates a circle and descends 1000 ft in altitude. At the centre is a War Memorial for brave Gorkha Soldiers."
      },
      {
        name: "Darjeeling Himalayan Railway",
        image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=600&q=80",
        description: "Also known as the Toy Train, this UNESCO World Heritage Site runs between New Jalpaiguri and Darjeeling. Built between 1879 and 1881, it is about 88 km long and climbs from 100m to 2,200m using six zig-zags and five loops. Steam locomotives still operate on certain routes, making it a unique colonial-era icon."
      },
      {
        name: "Ghoom Monastery",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
        description: "Ghoom is a quaint hill town about 6 km from Darjeeling, popular for its multiple Buddhist monasteries amidst mountainous terrain. It houses India's highest railway station at 7,407 ft altitude, with an adjacent museum — a must-visit for railway enthusiasts."
      },
      {
        name: "The Mall (Chowrasta)",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
        description: "The heart of Darjeeling town, Chowrasta livens up every evening with locals and tourists strolling, shopping at roadside stalls, enjoying street food, and taking pony rides. This no-vehicle zone offers a safe and free space for everyone to enjoy the true local Darjeeling experience."
      },
      {
        name: "Peace Pagoda",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80",
        description: "Shanti Stupa or Peace Pagoda houses four avatars of Buddha with the aim to spread peace. Built under the guidance of Buddhist monk Nichidatsu Fujii, it stands 28.5 meters tall with a diameter of 23 meters. Situated on the slopes of Jalapahar hills, it is one of the most beautiful pagodas in the state."
      },
      {
        name: "Kurseong",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
        description: "Originally called 'Karsan Rup' meaning Land of White Orchid, Kurseong is a small hill town known for its horticulture, tea gardens, and colonial-era schools. It has a pleasant climate throughout the year and is perfect for nature lovers and adventure seekers."
      },
      {
        name: "Dow Hill",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80",
        description: "Located on top of Kurseong town, Dow Hill is covered with dense forest and sky-reaching pine trees, remaining shrouded in mist almost all the time. A deer park and water reservoir are nearby, offering good views of surrounding towns."
      },
      {
        name: "Salamander Lake",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
        description: "Surrounded by tea gardens, this sanctuary shelters the rarest and most endangered species of salamanders. Once a famous British-era boating destination, locals and visitors still enjoy the peaceful and serene environment around the lake."
      }
    ],
    stay: "Darjeeling offers a wide range of accommodation from luxury heritage hotels to budget guesthouses. Popular areas to stay include Mall Road, Chowrasta, and Ghoom. We offer curated Car + Hotel packages starting from ₹4,999 per person including pickup from NJP/Bagdogra, hotel stay, and sightseeing by dedicated car.",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56729.44859258!2d88.2663!3d27.0360!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e42e00000000001%3A0x1!2sDarjeeling!5e0!3m2!1sen!2sin!4v1"
  },
  {
    slug: "santiniketan",
    name: "Santiniketan",
    tagline: "Abode of Peace — Tagore's Legacy",
    heroImage: "https://assets.cntraveller.in/photos/60ba1e65e1b212c19a817cea/master/w_1600%2Cc_limit/Bengal-tagore.jpg",
    about: "Santiniketan, meaning 'Abode of Peace', is a small town near Bolpur in Birbhum district of West Bengal. Founded by Nobel Laureate Rabindranath Tagore, it is home to the renowned Visva-Bharati University. The town is a cultural and artistic hub, famous for its open-air classrooms, Baul music, Poush Mela, and the unique blend of art, literature, and nature that Tagore envisioned.",
    howToReach: {
      air: "Nearest airport is Netaji Subhas Chandra Bose International Airport, Kolkata (about 160 km). From Kolkata, take a train or cab to Bolpur/Santiniketan.",
      train: "Bolpur Railway Station is the nearest station, just 2 km from Santiniketan. Regular trains run from Kolkata Howrah/Sealdah to Bolpur (2.5–3 hours journey).",
      road: "Santiniketan is about 160 km from Kolkata via NH19. Regular buses and taxis are available from Kolkata, Durgapur, and Asansol."
    },
    attractions: [
      {
        name: "Sangeet Bhavana",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
        description: "Established by Rabindranath Tagore in 1919, Sangeet Bhavana focuses on music and dance. It imparts training in Rabindra Sangeet, Hindustani classical vocal and instrumental music, Manipuri and Kathakali dance styles, dramas, and Tagore's own musical dance-dramas."
      },
      {
        name: "China Bhavan",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80",
        description: "Dedicated to the study of Chinese culture, traditions, and language, China Bhavan is regularly visited by Chinese scholars. The beautifully made building features intricate patterns on its exterior and houses a rich collection of Chinese literature and cultural artifacts."
      },
      {
        name: "Sonajhurir Haat",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
        description: "An open-air market in Sonajhuri forest about 9 km from Bolpur. Thousands of tourists visit every weekend to shop from this vibrant haat. The natural beauty of the eroded soil of river Kopai, known as KHOAI, is a unique geographical transformation worth seeing."
      },
      {
        name: "Kala Bhavan",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
        description: "Founded in 1919, Kala Bhavana is a distinguished centre for Visual Art practice and research in India. It is the fine arts faculty of Visva-Bharati University, carrying forward the artistic legacy of Nandalal Bose, Benodebehari Mukhopadhyay, and Ramkinkar Baij."
      },
      {
        name: "Chattimtala",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80",
        description: "The meditation spot of Tagore's father, Maharishi Debendranath Tagore. He first started upasana here on the 7th of Poush, celebrated every year as Poush Mela. Graduates are honored with a branch of Saptaparni tree, developing a bond with the institute."
      },
      {
        name: "Poush Mela",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
        description: "The most remarkable annual fair of Birbhum district, celebrated at Shantiniketan Mela Grounds to mark the foundation day. It attracts visitors from around the world with Baul musicians, tribal dancers, and local village artists. The week-long carnival marks the beginning of the harvest season."
      },
      {
        name: "Uttrayan Complex",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
        description: "The enclave of Rabindranath's own houses built over the last three decades of his life (1919–1941). The complex includes Udayana, Konark, Shyamali, Punascha, and Udichi — buildings that reflect the architectural genius of the poet's son, Rathindranath Tagore."
      },
      {
        name: "Prayer Hall (Upasana Ghar)",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80",
        description: "One of the most stunning buildings in Santiniketan, made from Belgian Glass. Also called Kanch Mandir, prayers are held every Wednesday and the hall is lined with candles every evening, accentuating its ethereal beauty."
      },
      {
        name: "Rabindra Bhavan Museum",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
        description: "Built in 1961, this museum houses Tagore's original manuscripts, letters, documents, paintings, certificates, and photographs. It also includes the Nobel Prize Medallion he received — a must-visit for every Tagore admirer."
      },
      {
        name: "Ballavpara Wildlife Sanctuary",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
        description: "Located in Santiniketan, spread across 200 hectares on the fringes of Bolpur. Established in 1967, it has one of the most successful deer conservation records in the state, home to Cheethals (Spotted Deer), Blackbucks, jackals, and foxes."
      },
      {
        name: "Visva-Bharati University",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80",
        description: "Founded by Nobel Laureate Rabindranath Tagore, this public central university is an institution of national importance. Tagore believed in open-air education in a natural environment, modeled on the ancient Gurukul system — a vision that still defines the university's unique character."
      },
      {
        name: "Amar-Kutir",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
        description: "Located near Visva-Bharati University, Amar Kutir showcases locally made handicrafts including leather bags, clothes, and wooden items. Founded as a place of refuge for political prisoners, it was later transformed into a centre for cottage industries to uplift rural Bengal."
      }
    ],
    stay: "Santiniketan offers guesthouses, heritage homestays, and resort-style accommodations. Best areas to stay are near Bolpur town and Sriniketan. We offer Car + Hotel packages from Kolkata starting at ₹3,499 per person including AC car, hotel stay, and guided sightseeing.",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58786.0!2d87.6833!3d23.6833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f71f00000000001%3A0x1!2sSantiniketan!5e0!3m2!1sen!2sin!4v1"
  },
  {
    slug: "sundarbans",
    name: "Sundarbans",
    tagline: "Land of the Royal Bengal Tiger",
    heroImage: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/23/Sundarban_Tiger.jpg/1280px-Sundarban_Tiger.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail",
    about: "The Sundarbans is the world's largest mangrove delta, shared between India and Bangladesh, and a UNESCO World Heritage Site. Located in the South 24 Parganas district of West Bengal, it is home to the majestic Royal Bengal Tiger, saltwater crocodiles, Irrawaddy dolphins, and hundreds of bird species. The labyrinthine network of rivers, creeks, and islands creates a mystical landscape unlike anywhere else on earth.",
    howToReach: {
      air: "Nearest airport is Netaji Subhas Chandra Bose International Airport, Kolkata (about 100 km from Godkhali). From Kolkata, take a cab or bus to Godkhali/Namkhana, then a boat into the Sundarbans.",
      train: "Nearest railway stations are Canning (for northern Sundarbans) and Namkhana (for southern Sundarbans). Regular trains run from Sealdah station in Kolkata.",
      road: "From Kolkata, drive to Godkhali (about 100 km via Basanti Highway). From Godkhali, boats are the only mode of transport into the delta."
    },
    attractions: [
      {
        name: "Henry's Island (Bakkhali)",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
        description: "Located on the western edge of the Sundarbans, Henry's Island is named after a European surveyor from the late 19th century. One of the numerous islands forming the Ganga-Brahmaputra delta, it offers an interesting mix of beach and mangrove forest. Tourists can laze on the beach and spot wildlife simultaneously, with a spectacular view from the watch tower in Bakkhali."
      },
      {
        name: "Sajnekhali Watch Tower",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80",
        description: "One of the most renowned watch towers in the Sundarbans, popular for its proximity to several resorts and serving as the forest department's head office. Tourists can obtain park entry permits here. Major attractions include Bono Bini Temple, Mangrove Interpretation Center, and the Bengal Tourism lodge. Bird lovers can spot Pelicans, Kingfishers, White Bellied Sea Eagles, and Sandpipers."
      },
      {
        name: "Bhagabatpur Crocodile Sanctuary",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
        description: "The only crocodile project in West Bengal, located adjacent to Lothian Island on the bank of the Saptamukhi Estuary. The hatchery houses estuarine crocodiles and Batagur Baska tortoises of varying ages. The dense mangrove forest at the confluence of the Saptamukhi river system offers immense natural beauty throughout the year."
      },
      {
        name: "Burirdabri Watch Tower",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
        description: "Famous for its mud walks and mangrove cage trail leading to the Raimongal Viewpoint. The mud walk lets you observe snails, crabs, and mollusks up close. The wooden bridge walk through the mud cage ends at a watchtower overlooking Bangladesh, with the Raimongal River forming the international boundary. One can see the Bangladesh Sundarbans from here."
      },
      {
        name: "Netidhopani Watch Tower",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80",
        description: "Associated with the legend of Behula and Lakhindari, this watchtower offers a splendid view of the ruins of a 400-year-old Shiva Temple. It is believed a road built by King Pratapaditya to guard the coastal area lies buried nearby. A sweet water pond is also present for tourists to explore."
      },
      {
        name: "Haliday Island Wildlife Sanctuary",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
        description: "Situated on the Matla river near the Bay of Bengal, Haliday Island is home to spotted deer, wild boar, barking deer, and rhesus macaque. Royal Bengal tigers are occasional visitors. Spanning 3.5 sq km, it is part of the Sundarbans Biosphere Reserve, officially declared in 1989."
      },
      {
        name: "Kalashdeep",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
        description: "Part of the Sundarbans National Park at the estuary of the Matla river. Royal Bengal tigers often come here to drink sweet water from a nearby pond. During winters, it becomes the breeding ground for Olive Ridley Turtles. Also a great spot for coastal birds and uncommon waders."
      },
      {
        name: "Bakkhali Beach",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80",
        description: "A seaside hamlet in South 24 Parganas with a white sand beach stretching about 8 km from Bakkhali to Fraserganj. Perfect for nature lovers seeking peace and serenity. Nearby attractions include the Bhagabatpur Crocodile Project, Sagar Island, Jambu Dwip, and Fraserganj. Best visited from October to March."
      },
      {
        name: "Sudhanyakhali Watch Tower",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
        description: "The perfect spot for wildlife enthusiasts to spot a tiger. The watchtower holds 25 people and overlooks a sweet water pond where wild animals come to drink. A vast grassland behind the pond offers invigorating views of the wild. Other wildlife spotted here includes crocodiles, wild boars, and axis deer."
      }
    ],
    stay: "Accommodation in Sundarbans ranges from forest lodges and eco-resorts to houseboat stays. Popular bases are Godkhali, Sajnekhali, and Pakhiralay. We offer curated Sundarbans packages from Kolkata starting at ₹3,999 per person including AC car to Godkhali, boat safari, forest lodge stay, and guided wildlife tour.",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471480.0!2d88.7!3d21.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a026b0000000001%3A0x1!2sSundarbans!5e0!3m2!1sen!2sin!4v1"
  },
  {
    slug: "dooars",
    name: "Dooars",
    tagline: "Gateway to Bhutan & the Northeast",
    heroImage: "https://hblimg.mmtcdn.com/content/hubble/img/dooars/mmt/destination/m_Dooars_l_457_685.jpg",
    about: "Dooars, meaning 'doors' or 'gateways', is a vast floodplain in the foothills of the Eastern Himalayas in northern West Bengal. Stretching between the Teesta and Sankosh rivers, it is a land of dense forests, tea gardens, national parks, and wildlife sanctuaries. The region is the gateway to Bhutan and the northeastern states of India, and is home to the one-horned rhinoceros, elephants, tigers, leopards, and hundreds of bird species.",
    howToReach: {
      air: "Nearest airport is Bagdogra Airport (IXB), about 60 km from Jalpaiguri. From Bagdogra, taxis are available to major Dooars destinations.",
      train: "New Jalpaiguri (NJP) and Alipurduar Junction are the main railway stations. Regular trains run from Kolkata Howrah to NJP (8–10 hours).",
      road: "Dooars is about 600 km from Kolkata via NH12. From Siliguri/NJP, regular buses and taxis connect to Jalpaiguri, Alipurduar, and forest areas."
    },
    attractions: [
      {
        name: "Gorumara National Park",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
        description: "Situated in the foothills of the Eastern Himalayas, Gorumara is spread over 80 sq km and is home to the mighty One Horned Indian Rhino. Declared a Reserve Forest in 1895 and a National Park in 1994, it was recognized as one of India's best protected areas in 2009. Jungle safaris bring you up close to rhinos, elephants, bison, and leopards."
      },
      {
        name: "Gajoldoba",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
        description: "A small village on the western bank of the Teesta River, 10 km from Siliguri. Famous for its dam in the Teesta basin, it is a bird watcher's paradise as migratory water birds throng the reservoir. Surrounded by the dense Baikunthapur forest, WBTDCL's property Bhorer Alo offers an enthralling nature experience."
      },
      {
        name: "Alipurduar",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80",
        description: "The gateway to Bhutan and the northeast, Alipurduar is lush with tea gardens and dense jungles. It is home to the South Khairbari Tiger Rescue Centre — a permanent shelter for tigers, unrivaled in the entire northeast. The Buxa hills and Bhutan valley views make it a stunning destination for nature lovers."
      },
      {
        name: "Jaldapara National Park",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
        description: "Covering 216 sq km of woods, grasslands, and riverbanks, Jaldapara was declared a wildlife sanctuary in 1941 for the Indian One-Horned Rhino and a National Park in 2012. Home to Bison, Hispid hare, Hog deer, Sambar, and Asian elephants. Birdwatchers can spot eagles, Bengal florican, Indian Hornbill, and jungle fowl."
      },
      {
        name: "Chapramari Wildlife Sanctuary",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
        description: "An extension of Gorumara National Park, separated by the Murti River and covering 960 hectares. Declared a sanctuary in 1998, it is best known for its large elephant population. The forest is bounded by shimmering river streams ideal for angling and boating. Wildlife includes elephants, gaurs, leopards, spotted deer, and occasionally one-horned rhinos."
      },
      {
        name: "Chilapata Forest",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80",
        description: "The main elephant corridor between Jaldapara and Buxa Tiger Reserve. This dense forest near Jaldapara Wildlife Sanctuary sees elephants roaming freely. Activities include angling, birding, and jungle safari. A must-visit for wildlife enthusiasts seeking an authentic forest experience."
      },
      {
        name: "Buxa Fort",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
        description: "Situated at 2,600 feet within the Buxa Tiger Reserve, this British-era high-security prison is now a popular trekking destination. The uphill trek of 2.5 km from the foothills passes through dense forests. A starting point for various trails, it offers options for both avid and light trekkers."
      },
      {
        name: "Jayanti River",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
        description: "A small forested village near Rajabhatkawa, about 30 km from Alipurduar. The Jayanti River forms a natural border with Bhutan. Often called the 'Queen of Dooars', the route to Jayanti offers sightings of elephant herds, spotted deer, and peacocks. The nearby Mahakal Cave temple dedicated to Lord Shiva is another attraction."
      },
      {
        name: "Murti",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80",
        description: "A picturesque village along the bank of River Murti, which originates from Neora Valley National Park. The river divides the Gorumara and Chapramari forests. Located 60 km from Jalpaiguri at the Himalayan foothills, Murti offers awe-inspiring scenery of adjacent forest areas and is ideal for nature walks and riverside camping."
      },
      {
        name: "Malbazar",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
        description: "One of the most important towns in the Dooars region, popular for its tea gardens and the beautiful Mal Park. Strategically located on NH31, it provides easy access to Gorumara National Park, Chapramari Wildlife Sanctuary, Gorubathan, Jhalong, Bindu, Samsing, and Suntalekhola — making it an ideal base for exploring Eastern Dooars."
      }
    ],
    stay: "Dooars offers forest lodges, eco-resorts, tea garden bungalows, and budget guesthouses. Popular bases are Lataguri (for Gorumara), Madarihat (for Jaldapara), and Alipurduar. We offer Car + Hotel packages from NJP/Bagdogra starting at ₹4,299 per person including pickup, forest lodge stay, and jungle safari.",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471480.0!2d89.3!3d26.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e3f00000000001%3A0x1!2sDooars%2C+West+Bengal!5e0!3m2!1sen!2sin!4v1"
  },
  {
    slug: "purulia",
    name: "Purulia",
    tagline: "Land of Red Soil, Chhau & Tribal Culture",
    heroImage: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/7c/8f/6f/ajodhya-hill-area.jpg?w=500&h=500&s=1",
    about: "Purulia is a district in the western part of West Bengal, bordering Jharkhand. Known for its rugged red-soil landscape, Ayodhya Hills, tribal culture, and the world-famous Chhau dance, Purulia is an offbeat destination that offers a raw and authentic experience of rural Bengal. The district is dotted with ancient temples, tribal villages, waterfalls, dams, and wildlife sanctuaries, making it a paradise for nature lovers, culture enthusiasts, and adventure seekers.",
    howToReach: {
      air: "Nearest airport is Netaji Subhas Chandra Bose International Airport, Kolkata (about 330 km). From Kolkata, take a train or cab to Purulia.",
      train: "Purulia Railway Station is well connected to Kolkata Howrah (about 5–6 hours). Regular trains run on the Howrah–Purulia route.",
      road: "Purulia is about 330 km from Kolkata via NH19 and NH14. Regular buses and taxis are available from Kolkata, Asansol, and Durgapur."
    },
    attractions: [
      {
        name: "Chhau Dance",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
        description: "The world-famous Chhau dance of Purulia is a masked dance drama prevalent among Santhals, Kumars, Mahatos, and other communities. The beautiful masks, exclusive dance style, and colorful costumes have made it popular worldwide. The dance involves physical strength and agility comparable to martial arts, and is performed during festivals based on themes from the Ramayana, Puranas, and contemporary events."
      },
      {
        name: "Ayodhya Hills & Forest Reserve",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
        description: "An undulating hill range in Purulia district, part of the Dalma Hills and the Eastern Ghats. The highest peak is Gorgaburu, nearest to Bagmundi town. Popular for rock climbing, mountaineering, and camping in the Dhol Buru Hills. Two routes are available — via Jhalda or via Sirkabad."
      },
      {
        name: "Baghmundi",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80",
        description: "A small community development block in Purulia visited by thousands of tourists annually for the natural beauty of the Ayodhya Hills and its many dams. The picturesque landscape features undulating hills, cascading waterfalls, and lush green forests with rich flora and fauna."
      },
      {
        name: "Saheb Bandh Lake",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
        description: "A 50-acre lake in Purulia constructed in the mid-19th century during the British Raj. A popular sanctuary for bird watchers, it is home to migratory birds from Baluchistan, Siberia, and Europe during the migratory season."
      },
      {
        name: "Duarsini",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
        description: "A small tribal village 13 km from Bandwan town, surrounded by Sal, Segun, Piyal, and Palash forests. The Dalma Forest here is home to bears, wolves, boars, and migrating elephant herds. Several tribal villages of Santhals, Shabaradh, Kheriya, and Munda tribes are nearby. The Forest Department runs an eco-tourism centre with traditional tribal cottages."
      },
      {
        name: "Murguma Dam",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80",
        description: "A tribal village at the Purulia–Jharkhand border, known for its pure and calm lake. The combination of blue water and green surroundings makes it a peaceful picnic spot. Tourists can enjoy boating, fishing, and bird-watching. The earth-filled dam on the Kangsabati river is surrounded by scenic hills and forests, ideal for trekking and camping."
      },
      {
        name: "Bamni Falls",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
        description: "A scenic waterfall surrounded by lush green forest in Baghmundi, Purulia. A popular picnic spot for nature lovers and adventure enthusiasts. A 20–30 minute trek through a beautiful forest trail of tall Sal trees leads to the waterfall. The rich flora is home to many varieties of birds."
      },
      {
        name: "Khairabera",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
        description: "Situated in Baghmundi, 70 km from Purulia town, Khairabera has a vast water body at the foothills of Chemto and Barra Hills. A serene hill station surrounded by forests, streams, waterfalls, and hills. The irrigation dam on the Kangsabati river offers a picturesque view of surrounding hills and forests."
      },
      {
        name: "Baranti",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80",
        description: "A beautiful village surrounded by hills and lakes, 265 km from Kolkata. Near the Ramchandrapur Irrigation Project, it offers grand views of the reservoir. Tourists can take nature walks along Murardi Lake or through forests and watch the sun set over the hills and lake."
      },
      {
        name: "Garh Panchakot",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
        description: "Situated at the foothill of Panchakot (Panchet Hill) in the northeast corner of Purulia district. The hilltop offers a picturesque panoramic view of the Panchet dam on the Damodar River and its reservoir."
      },
      {
        name: "Chhau Mask Making (Charida)",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
        description: "Charida village in Purulia is famous for making Chhau masks, with hundreds of families involved in this craft. The village has a Chhau museum showcasing this famous art and heritage. This cottage industry has been nurtured by the state government and is a unique cultural experience for visitors."
      },
      {
        name: "Jhumur Folk Music",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80",
        description: "An ancient musical form from the red-soil regions of western West Bengal — Purulia, Bankura, Bardhaman, and Birbhum. Popular among tribal communities like Santhal, Munda, Oraon, and Kharia tribes. Different Jhumur tunes are sung throughout the year based on the season, and the form is recognized for its lyrical and literary significance."
      },
      {
        name: "Deulghat",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
        description: "Known as the 'land of temples', Deulghat near Boram has ruins of 15 temples near the Kansai River. The prodigious architecture and beautiful carvings make it a must-visit. Deulghat Dam and Deulghat Waterfall are other popular attractions that draw visitors from across the region."
      },
      {
        name: "Surulia Eco Park",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
        description: "Developed by the Forest Department, Surulia is a popular eco-tourism picnic spot just 6 km from Purulia town, on the bank of the Kangsabati River. It has a deer park and tourism cottages inside the park, visited by large numbers of eco-tourists."
      }
    ],
    stay: "Purulia offers forest lodges, eco-cottages, and heritage guesthouses. Popular bases are Purulia town, Baghmundi, and Ayodhya Hills. We offer Car + Hotel packages from Kolkata starting at ₹3,299 per person including AC car, hotel stay, and guided sightseeing of tribal villages and nature spots.",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471480.0!2d86.3!3d23.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6e00000000001%3A0x1!2sPurulia%2C+West+Bengal!5e0!3m2!1sen!2sin!4v1"
  }
  ,
  {
    slug: "kolkata",
    name: "Kolkata",
    tagline: "City of Joy — Culture, Heritage & Festivals",
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1lhlDPqJXP5VLeIilaMlAAohpfbJ-fqOO7Oukbwe44ciQKBznyFq2k5FO&s=10",
    about: "Kolkata, the City of Joy, is the cultural capital of India and the former capital of British India. Situated on the eastern bank of the Hooghly River, it is a city of contrasts — colonial architecture stands beside bustling bazaars, world-class museums sit next to ancient temples, and the vibrant Durga Puja celebrations light up the entire city every year. Kolkata is the birthplace of the Bengal Renaissance and home to Nobel laureates, legendary filmmakers, and iconic artists.",
    howToReach: {
      air: "Netaji Subhas Chandra Bose International Airport (CCU) is well connected to all major Indian cities and several international destinations. The airport is about 17 km from the city centre.",
      train: "Kolkata has two major railway terminals — Howrah Junction and Sealdah Station — connected to all parts of India. The city also has Kolkata Metro, India's oldest metro rail network.",
      road: "Kolkata is connected by NH19 (to Delhi), NH12 (to North Bengal), and NH16 (to Chennai). Regular buses and taxis are available from all neighboring states."
    },
    attractions: [
      {
        name: "Howrah Bridge",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
        description: "A balanced cantilever bridge over the Hooghly River, commissioned in 1943. With an overall length of 2,150 feet and a single span of 1,500 feet, it carries approximately 100,000 vehicles and 150,000 pedestrians daily — making it one of the busiest cantilever bridges in the world. An iconic landmark built using 26,500 tons of steel."
      },
      {
        name: "Victoria Memorial Hall",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80",
        description: "One of the most iconic landmarks of Kolkata, constructed in memory of Queen Victoria by Viceroy Lord Curzon. Built entirely of white marble, it is one of India's largest and oldest museum libraries, housing 28,934 artefacts and 3,900 paintings, surrounded by 21 gardens. A perfect spot for families, picnics, horse carriage rides, and street food."
      },
      {
        name: "Vidyasagar Setu",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
        description: "Popularly known as the Second Hooghly Bridge, Vidyasagar Setu is the longest cable-stayed bridge in India at 458 m long and 115 m wide. Named after educationist reformer Pandit Ishwar Chandra Vidyasagar, it connects Howrah to Kolkata via the Kona Expressway. Its mesmerizing view from the Hooghly River has made it a popular film backdrop."
      },
      {
        name: "Kalighat Temple",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
        description: "Regarded as the holiest Shaktipeeth among the 52 Shakti Peethams of India. Situated on the banks of Adi Ganga, the temple features a sanctum sanctorum, Nat Mandir, a Shiva Temple, and a Radha Krishna shrine. The main attraction is the idol of Goddess Kali with a long gold tongue."
      },
      {
        name: "Indian Museum (Jadu Ghar)",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80",
        description: "The ninth-oldest museum in the world and the largest in India. Highlights include an Egyptian mummy, a Buddhist stupa, the Indian Gallery with ancient artifacts and sculptures, and a natural history section. Features unique collections of Indian sculptures and coins from the second century AD."
      },
      {
        name: "Eco Park (New Town)",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
        description: "One of the largest urban parks in India, spread across 475 acres with a lake and lush greenery. Activities include duo cycling, kayaking, zorbing, rifle shooting, and high-speed boating. Features models of the Seven Wonders, Japanese Garden, Butterfly Garden, Floating Musical Fountain, and an eco island."
      },
      {
        name: "Jorasanko Thakur Bari",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
        description: "The ancestral home and birthplace of Rabindranath Tagore in North Kolkata, now housing Rabindra Bharati University. The Rabindra Bharati Museum established in 1961 exhibits untold stories from the Tagore family. A nerve centre of Bengal art, cultural reformation, Bengal Renaissance, and Brahmo Samaj."
      },
      {
        name: "Princep Ghat",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80",
        description: "Built in 1841 during the British Raj and named after Anglo-Indian scholar James Princep. Located along the banks of the Ganges with stone steps leading to the water. A peaceful retreat with gardens, lawns, park benches, and shady trees. Tourists can hire small boats for a pleasure ride on the river."
      },
      {
        name: "Park Street",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
        description: "A famous thoroughfare in downtown Kolkata, known as Food Street and The Street that Never Sleeps. Home to iconic restaurants like Trinca's, Peter Cat, Blue Fox, Mocambo, and Moulin Rouge. Remains Kolkata's foremost dining district with many restaurants and pubs since the British era."
      },
      {
        name: "Millennium Park",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
        description: "A 2.5 km long park on Strand Road next to the Hooghly River, inaugurated on 26 December 1999. Part of the Riverside Beautification Project, it offers stunning views of the Hooghly waterfront and Howrah Bridge, beautified with trees and pretty lights."
      },
      {
        name: "Sovabazar Rajbari",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80",
        description: "Also known as Baag ola Bari (House with the Lions), this 17th-century palace built by Raja Nabakrishna Deb is one of the oldest royal houses of Kolkata. Famous for its grand Durga Puja celebrations since 1757. The open courtyard Nat Mandap with columns and arches is a magnificent architectural highlight."
      },
      {
        name: "Eden Gardens",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
        description: "The mecca of cricket in East India. Established in 1864, it is the oldest and second-largest cricket stadium in India and third largest in the world, with a capacity of 66,000. Called cricket's answer to the Coliseum, renowned for its passionate crowd and a place of pilgrimage for international cricketers."
      },
      {
        name: "Rabindra Sadan",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
        description: "One of the oldest cultural hubs of India, inaugurated in 1961 by Prime Minister Jawaharlal Nehru. Named in honor of Rabindranath Tagore, it is the principal venue for the Kolkata Film Festival. Now a full-fledged cultural complex hosting dance, drama, theatre, art exhibitions, and photography shows."
      },
      {
        name: "Durga Puja",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80",
        description: "The biggest festival of West Bengal, accorded UNESCO Intangible Cultural Heritage status in 2020. A 10-day celebration featuring elaborate pandals with innovative themes, stunning lighting, and beautiful idols. The carnival of idol immersion on Bijoy Dasami is a spectacular event. Preparations begin months in advance across the entire city."
      },
      {
        name: "Birla Mandir",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
        description: "A magnificent 20th-century structure in white marble and cream sandstone on Ashutosh Chowdhury Avenue, Ballygunge. Built by the Birla family over 26 years and opened in 1996. Consecrated to Lord Krishna and Radha, reflecting Rajasthani architecture resembling the Lingaraj Temple of Bhubaneswar."
      }
    ],
    stay: "Kolkata offers world-class hotels, heritage properties, boutique guesthouses, and budget lodges. Popular areas to stay include Park Street, New Town, Salt Lake, and Esplanade. We offer city tour packages with dedicated AC car starting at ₹1,999 per day including driver, fuel, and guided sightseeing.",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471480.0!2d88.3639!3d22.5726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db00000001%3A0x1!2sKolkata!5e0!3m2!1sen!2sin!4v1"
  }
  ,
  {
    slug: "bishnupur",
    name: "Bishnupur",
    tagline: "Temple Town of Terracotta & Classical Music",
    heroImage: "https://www.joinpaperplanes.com/wp-content/uploads/2024/02/Rashmancha-in-Bishnupur-West-Bengal-made-of-terracota-in-the-traditional-Bengal-architecture-style-%E2%80%94-1-1024x683.jpg",
    about: "Bishnupur is a historic town in Bankura district of West Bengal, renowned for its magnificent terracotta temples built by the Malla kings between the 17th and 18th centuries. The town is also the birthplace of the Bishnupur Gharana of Hindustani classical music. Famous for Baluchari silk sarees, Dokra metal craft, and Chhau dance, Bishnupur is a treasure trove of art, architecture, and culture.",
    howToReach: {
      air: "Nearest airport is Netaji Subhas Chandra Bose International Airport, Kolkata (about 200 km). From Kolkata, take a train or cab to Bishnupur.",
      train: "Bishnupur Railway Station is connected to Kolkata Howrah (about 3.5 hours). Regular trains run on the Howrah-Bishnupur route.",
      road: "Bishnupur is about 200 km from Kolkata via NH19 and SH5. Regular buses and taxis are available from Kolkata, Bankura, and Durgapur."
    },
    attractions: [
      {
        name: "Rasmancha",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
        description: "The oldest brick temple in Bishnupur, commissioned by Mallabhum king Hambir Malla Dev in 1600 AD. Shaped as an elongated pyramidal tower surrounded by hut-shaped turrets, it was used to house idols of Lord Krishna during the Rash festival. Maintained by the Archaeological Survey of India."
      },
      {
        name: "Shyam Rai Temple",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
        description: "A Pancharatna brick temple built by Malla King Raghunath Singha in 1643 AD, noted for elaborate terracotta ornamentations. The square-shaped temple has interior and exterior decorated with terracotta tiles depicting stories of Lord Krishna, the Ramayana, Mahabharata, plants, and animals."
      },
      {
        name: "Jorebangla Temple",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80",
        description: "Built by Malla King Raghunath Singh in 1655, this brick temple resembles two thatched huts joined together and mounted on a single tower. Erected on a one-metre-high laterite platform, the entire outer wall is decorated with terracotta sculptures depicting episodes from the Ramayana and Mahabharata."
      },
      {
        name: "Madanmohan Temple",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
        description: "Constructed by Malla King Durjana Singh Deva in 1694 AD for Lord Krishna and Goddess Radha. Built in Ekaratna style with a square flat roof and curved cornices. One of the most renowned temples in Bishnupur where the deity is still worshipped, with terracotta walls covered in Ramayana and Krishna Leela carvings."
      },
      {
        name: "Kalachand Temple",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
        description: "Built in 1656 by Malla king Raghunath Singha, the earliest Eka-ratna temple in Bishnupur. Made of laterite, about 11.1 sq mtrs on plan and 9.2 mtrs in height. Features resplendent terracotta carvings in the chala style of Bengal architecture."
      },
      {
        name: "Lalji Temple",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80",
        description: "Built by Malla king Bir Singha with a Shikhara on a raised square platform, devoted to Radha-Krishna. Features Bengali architecture with ornamental stucco decorations. The gateway has two cars for Lord Lalji and Lord Raghunath, taken out in procession during Dussera festival."
      },
      {
        name: "Radha Govinda Temple",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
        description: "A terracotta Ekaratna temple built in 1729 during the time of Krishna Singha. Located near the Nandalal Temple and Radha Madhav Temple, close to the famous Pora Matir Hat weekly rural marketplace. Square on plan with a curved roof and Sikhara, featuring bas-relief carvings."
      },
      {
        name: "Radha Shyam Temple",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
        description: "An Ekaratna temple built in 1758 by King Chaitanya Singha, located beside the Mrinmayee Mata Temple. This south-facing terracotta temple stands within a large courtyard with outer walls featuring carvings in low relief with elaborate stucco ornamentation. Preserved by the Archaeological Survey of India."
      },
      {
        name: "Dal Madol Cannon",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80",
        description: "Built in 1742 by Raja Gopal Singh to protect Bishnupur from the Maratha invasion. The cannon measures 3.8 m in length with a barrel of 28.5 cm. Remarkably, despite being made of pure iron and kept in the open since its inception, it remains completely free from rust."
      },
      {
        name: "Garh Darwaja",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
        description: "A terracotta gateway in Bishnupur, also known as Chota Patthar Darwaja, built during the rule of the Malla Kings. An arched terracotta structure with a plain exterior. Nearby lies the larger Bara Patthar Darwaja or Main Gateway of Bishnupur."
      },
      {
        name: "Baluchari Saree",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
        description: "Bishnupur is famous for the exquisite Baluchari silk sarees with intricate weaving in the pallu and borders showcasing mythological stories from the Ramayana and Mahabharata. Made from pure silk with a natural shine and glossy look, these sarees are among the most prized in India."
      },
      {
        name: "Dokra Metal Casting",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80",
        description: "A special art form practiced by the tribal Dokra Damar people of Bishnupur. Clay is coated with wax, then with clay paste, and fired to create religious symbols, jewelry, cutlery, and bells. Dokra jewelry is widely worn by women and this ancient craft is a surviving legacy of Bishnupur."
      },
      {
        name: "Bishnupur Music Festival",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
        description: "Every February, the West Bengal Tourism Department organizes the Bishnupur Music Festival to pay homage to the Bishnupur Gharana of Hindustani Classical Music — the only specialist method of Indian Classical Music from Bengal, originating in the 13th century following the Dhrupad tradition."
      },
      {
        name: "Mukutmanipur",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
        description: "Situated at the confluence of rivers Kansabati and Kumari, home to Santhal, Bhumij, and Munda tribes. Features the Kangsabati Dam — the second biggest earth dam in India — along with forests and hillocks. An ideal blend of tribal culture and serene nature, perfect for weekend getaways from Kolkata."
      },
      {
        name: "Susunia Hill",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80",
        description: "A 1,500 ft high hill in the north-western part of Bankura District. Ideal for nature lovers with cascading waterfalls, greenery, and the Gandheshwari river. Famous for rock climbing and mountaineering. The oldest rock inscription of West Bengal is located here."
      },
      {
        name: "Santhali Dance",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
        description: "One of the popular folk dances of West Bengal, performed by the Santhali community for almost every occasion. Includes Sohrai (harvest dance) and Dasai (performed before Durga Puja). Accompanied by Madol, Flute, Dhamsa, Jhanj, and Kartal instruments."
      }
    ],
    stay: "Bishnupur offers heritage guesthouses, WBTDC lodges, and budget hotels. We offer Car + Hotel packages from Kolkata starting at ₹2,999 per person including AC car, hotel stay, and guided temple tour with a local expert.",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58786.0!2d87.3167!3d23.0833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6b00000000001%3A0x1!2sBishnupur%2C+West+Bengal!5e0!3m2!1sen!2sin!4v1"
  }
  ,
  {
    slug: "digha",
    name: "Digha",
    tagline: "Bengal's Favourite Beach Destination",
    heroImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
    about: "Digha is the most popular beach destination in West Bengal, located on the Bay of Bengal in the Purba Medinipur district. Known for its wide, shallow beach, gentle waves, and casuarina-lined shores, Digha has been a favourite getaway for Bengali families for generations. The town is divided into Old Digha and New Digha, each offering a distinct experience. With the development of Shankarpur and Mandarmani nearby, the entire coastline has become a vibrant tourist corridor.",
    howToReach: {
      air: "Nearest airport is Netaji Subhas Chandra Bose International Airport, Kolkata (about 185 km). From Kolkata, take a train or cab to Digha.",
      train: "Digha Railway Station is directly connected to Kolkata Howrah and Santragachi stations. The Tamralipta Express and Digha Kandari Express are popular trains on this route (journey time: 3–4 hours).",
      road: "Digha is about 185 km from Kolkata via NH16. Regular buses run from Esplanade Bus Terminus, Kolkata. The drive takes approximately 4 hours."
    },
    attractions: [
      {
        name: "Old Digha Beach",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
        description: "The original and most iconic beach of Digha, known for its wide sandy shore and gentle waves. The beach is lined with casuarina trees and is ideal for morning and evening walks. The shallow water makes it safe for families with children. The beach comes alive at sunset with local food stalls, horse rides, and vendors selling shells and souvenirs."
      },
      {
        name: "New Digha Beach",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
        description: "A cleaner and more developed stretch of beach compared to Old Digha, with better amenities, hotels, and restaurants along the seafront. New Digha is popular for its evening promenade and is the hub of most tourist activity, shopping, and dining in the area."
      },
      {
        name: "Marine Aquarium & Research Centre",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80",
        description: "One of the largest marine aquariums in India, located in New Digha. It houses a fascinating collection of marine life including various species of fish, sea turtles, sharks, and corals. A must-visit for families and children to learn about the rich marine biodiversity of the Bay of Bengal."
      },
      {
        name: "Shankarpur Beach",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
        description: "A quieter and less crowded beach about 14 km from Digha, known for its natural beauty and a large fishing harbour. Shankarpur is ideal for those seeking a peaceful beach experience away from the crowds. The sight of hundreds of fishing boats returning at dawn is a spectacular visual treat."
      },
      {
        name: "Mandarmani",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80",
        description: "A small beach village about 30 km from Digha, famous for being one of the longest motorable beaches in India. The red crabs on the beach are a unique attraction. Mandarmani is popular for beach drives, seafood, and a relaxed coastal atmosphere with numerous resorts along the shore."
      },
      {
        name: "Talsari Beach",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
        description: "Located on the Odisha-West Bengal border, about 10 km from Digha, Talsari is a pristine and relatively untouched beach surrounded by casuarina forests. The Subarnarekha River meets the Bay of Bengal here, creating a beautiful confluence. It is a perfect spot for nature lovers and photography enthusiasts."
      },
      {
        name: "Chandaneswar Temple",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
        description: "A famous Shiva temple located about 8 km from Digha on the Odisha border. The temple is dedicated to Lord Shiva and is visited by thousands of devotees, especially during Shivratri when a massive fair is organized. The temple is an important religious site for both West Bengal and Odisha pilgrims."
      },
      {
        name: "Udaipur Beach",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
        description: "A hidden gem near Digha, Udaipur beach is a secluded and peaceful stretch of coastline that remains largely untouched by mass tourism. Surrounded by casuarina groves, it offers a serene escape for those looking to enjoy the beach in solitude."
      }
    ],
    stay: "Digha offers a wide range of accommodation from budget lodges to mid-range hotels and beach resorts. New Digha has the highest concentration of hotels. We offer Car + Hotel packages from Kolkata starting at ₹2,999 per person including AC car, hotel stay near the beach, and sightseeing to Shankarpur, Mandarmani, and Talsari.",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58786.0!2d87.5!3d21.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a03a00000000001%3A0x1!2sDigha%2C+West+Bengal!5e0!3m2!1sen!2sin!4v1"
  }
];

export function getDestination(slug: string): Destination | undefined {
  return destinations.find(d => d.slug === slug);
}

export function getAllSlugs(): string[] {
  return destinations.map(d => d.slug);
}
