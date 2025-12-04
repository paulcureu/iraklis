export type GalleryCategory = "Byzantine" | "Modern";

export interface GalleryItem {
    id: string;
    src: string;
    title: string;
    category: GalleryCategory;
    width?: number;
    height?: number;
}

export const galleryItems: GalleryItem[] = [
    // --- Modern Art ---
    // Basreliefs
    { id: "bas-1", src: "/art/Basreliefs/1.jpg", title: "Basreliefs", category: "Modern" },
    { id: "bas-2", src: "/art/Basreliefs/2.jpg", title: "Basreliefs", category: "Modern" },
    { id: "bas-3", src: "/art/Basreliefs/3.jpg", title: "Basreliefs", category: "Modern" },
    { id: "bas-4", src: "/art/Basreliefs/4.jpg", title: "Basreliefs", category: "Modern" },
    { id: "bas-5", src: "/art/Basreliefs/5.jpg", title: "Basreliefs", category: "Modern" },
    { id: "bas-6", src: "/art/Basreliefs/6.jpg", title: "Basreliefs", category: "Modern" },

    // New York ~ exterior stone design ~ 2008-2009
    { id: "ny-1", src: "/art/NewYork/1.jpg", title: "New York ~ exterior stone design ~ 2008-2009", category: "Modern" },
    { id: "ny-2", src: "/art/NewYork/2.jpg", title: "New York ~ exterior stone design ~ 2008-2009", category: "Modern" },
    { id: "ny-3", src: "/art/NewYork/3.jpg", title: "New York ~ exterior stone design ~ 2008-2009", category: "Modern" },
    { id: "ny-4", src: "/art/NewYork/4.jpg", title: "New York ~ exterior stone design ~ 2008-2009", category: "Modern" },
    { id: "ny-5", src: "/art/NewYork/5.jpg", title: "New York ~ exterior stone design ~ 2008-2009", category: "Modern" },
    { id: "ny-6", src: "/art/NewYork/6.jpg", title: "New York ~ exterior stone design ~ 2008-2009", category: "Modern" },
    { id: "ny-7", src: "/art/NewYork/7.jpg", title: "New York ~ exterior stone design ~ 2008-2009", category: "Modern" },
    { id: "ny-8", src: "/art/NewYork/8.jpg", title: "New York ~ exterior stone design ~ 2008-2009", category: "Modern" },

    // Georgia ~ exterior stone design ~ 2012-2013
    { id: "geo-ext-1", src: "/art/Georgia/1.jpg", title: "Georgia ~ exterior stone design ~ 2012-2013", category: "Modern" },
    { id: "geo-ext-2", src: "/art/Georgia/2.jpg", title: "Georgia ~ exterior stone design ~ 2012-2013", category: "Modern" },

    // Holly Table ~ Rusia
    { id: "holly-1", src: "/art/HollyTable/1.jpg", title: "Holly Table ~ Rusia", category: "Modern" },
    { id: "holly-2", src: "/art/HollyTable/2.jpg", title: "Holly Table ~ Rusia", category: "Modern" },

    // --- Byzantine Art ---
    // Church Georgia ~ 2008-2012
    { id: "church-geo-1", src: "/art/ChurchGeorgia/1.jpg", title: "Church Georgia ~ 2008-2012", category: "Byzantine" },
    { id: "church-geo-2", src: "/art/ChurchGeorgia/2.jpg", title: "Church Georgia ~ 2008-2012", category: "Byzantine" },
    { id: "church-geo-3", src: "/art/ChurchGeorgia/3.jpg", title: "Church Georgia ~ 2008-2012", category: "Byzantine" },

    // Church Georgia ~ 2013
    { id: "church-geo1-1", src: "/art/ChurchGeorgia1/1.jpg", title: "Church Georgia ~ 2013", category: "Byzantine" },
    { id: "church-geo1-2", src: "/art/ChurchGeorgia1/2.jpg", title: "Church Georgia ~ 2013", category: "Byzantine" },
    { id: "church-geo1-3", src: "/art/ChurchGeorgia1/3.jpg", title: "Church Georgia ~ 2013", category: "Byzantine" },
    { id: "church-geo1-4", src: "/art/ChurchGeorgia1/4.jpg", title: "Church Georgia ~ 2013", category: "Byzantine" },

    // Church Georgia ~ 2019
    { id: "church-geo2-1", src: "/art/ChurchGeorgia2/1.jpg", title: "Church Georgia ~ 2019", category: "Byzantine" },
    { id: "church-geo2-2", src: "/art/ChurchGeorgia2/2.jpg", title: "Church Georgia ~ 2019", category: "Byzantine" },
    { id: "church-geo2-3", src: "/art/ChurchGeorgia2/3.jpg", title: "Church Georgia ~ 2019", category: "Byzantine" },
    { id: "church-geo2-4", src: "/art/ChurchGeorgia2/4.jpg", title: "Church Georgia ~ 2019", category: "Byzantine" },
    { id: "church-geo2-5", src: "/art/ChurchGeorgia2/5.jpg", title: "Church Georgia ~ 2019", category: "Byzantine" },
    { id: "church-geo2-6", src: "/art/ChurchGeorgia2/6.jpg", title: "Church Georgia ~ 2019", category: "Byzantine" },
    { id: "church-geo2-7", src: "/art/ChurchGeorgia2/7.jpg", title: "Church Georgia ~ 2019", category: "Byzantine" },
    { id: "church-geo2-8", src: "/art/ChurchGeorgia2/8.jpg", title: "Church Georgia ~ 2019", category: "Byzantine" },

    // Iconostas Moscow
    { id: "icon-moscow-1", src: "/art/IconostasMoscow/1.jpg", title: "Iconostas Moscow", category: "Byzantine" },
    { id: "icon-moscow-2", src: "/art/IconostasMoscow/2.jpg", title: "Iconostas Moscow", category: "Byzantine" },
    { id: "icon-moscow-3", src: "/art/IconostasMoscow/3.jpg", title: "Iconostas Moscow", category: "Byzantine" },
    { id: "icon-moscow-4", src: "/art/IconostasMoscow/4.jpg", title: "Iconostas Moscow", category: "Byzantine" },
    { id: "icon-moscow-5", src: "/art/IconostasMoscow/5.jpg", title: "Iconostas Moscow", category: "Byzantine" },
    { id: "icon-moscow-6", src: "/art/IconostasMoscow/6.jpg", title: "Iconostas Moscow", category: "Byzantine" },
    { id: "icon-moscow-7", src: "/art/IconostasMoscow/7.jpg", title: "Iconostas Moscow", category: "Byzantine" },
    { id: "icon-moscow-8", src: "/art/IconostasMoscow/8.jpg", title: "Iconostas Moscow", category: "Byzantine" },
    { id: "icon-moscow-9", src: "/art/IconostasMoscow/9.jpg", title: "Iconostas Moscow", category: "Byzantine" },
    { id: "icon-moscow-10", src: "/art/IconostasMoscow/10.jpg", title: "Iconostas Moscow", category: "Byzantine" },
    { id: "icon-moscow-11", src: "/art/IconostasMoscow/11.jpg", title: "Iconostas Moscow", category: "Byzantine" },
    { id: "icon-moscow-12", src: "/art/IconostasMoscow/12.jpg", title: "Iconostas Moscow", category: "Byzantine" },

    // Icons
    { id: "icons-1", src: "/art/IconsArt/1.jpg", title: "Icons", category: "Byzantine" },
    { id: "icons-2", src: "/art/IconsArt/2.jpg", title: "Icons", category: "Byzantine" },
    { id: "icons-3", src: "/art/IconsArt/3.jpg", title: "Icons", category: "Byzantine" },
    { id: "icons-4", src: "/art/IconsArt/4.jpg", title: "Icons", category: "Byzantine" },
    { id: "icons-5", src: "/art/IconsArt/5.jpg", title: "Icons", category: "Byzantine" },
    { id: "icons-6", src: "/art/IconsArt/6.jpg", title: "Icons", category: "Byzantine" },
    { id: "icons-7", src: "/art/IconsArt/7.jpg", title: "Icons", category: "Byzantine" },
    { id: "icons-8", src: "/art/IconsArt/8.jpg", title: "Icons", category: "Byzantine" },
    { id: "icons-9", src: "/art/IconsArt/9.jpg", title: "Icons", category: "Byzantine" },
    { id: "icons-10", src: "/art/IconsArt/10.jpg", title: "Icons", category: "Byzantine" },
    { id: "icons-11", src: "/art/IconsArt/11.jpg", title: "Icons", category: "Byzantine" },
    { id: "icons-12", src: "/art/IconsArt/12.jpg", title: "Icons", category: "Byzantine" },

    // Marble Kapitels of St.Evangelists ~ Mount Athos
    { id: "st-evan-1", src: "/art/StEvangelists/1.jpg", title: "Marble Kapitels of St.Evangelists ~ Mount Athos", category: "Byzantine" },
    { id: "st-evan-2", src: "/art/StEvangelists/2.jpg", title: "Marble Kapitels of St.Evangelists ~ Mount Athos", category: "Byzantine" },
    { id: "st-evan-3", src: "/art/StEvangelists/3.jpg", title: "Marble Kapitels of St.Evangelists ~ Mount Athos", category: "Byzantine" },
    { id: "st-evan-4", src: "/art/StEvangelists/4.jpg", title: "Marble Kapitels of St.Evangelists ~ Mount Athos", category: "Byzantine" },

    // Greece ~ Mount Athos ~ 2023-2025
    { id: "athos-23-1", src: "/art/GreecAthos2023/1.jpg", title: "Greece ~ Mount Athos ~ 2023-2025", category: "Byzantine" },
    { id: "athos-23-2", src: "/art/GreecAthos2023/2.jpg", title: "Greece ~ Mount Athos ~ 2023-2025", category: "Byzantine" },
    { id: "athos-23-3", src: "/art/GreecAthos2023/3.jpg", title: "Greece ~ Mount Athos ~ 2023-2025", category: "Byzantine" },
    { id: "athos-23-4", src: "/art/GreecAthos2023/4.jpg", title: "Greece ~ Mount Athos ~ 2023-2025", category: "Byzantine" },
    { id: "athos-23-5", src: "/art/GreecAthos2023/5.jpg", title: "Greece ~ Mount Athos ~ 2023-2025", category: "Byzantine" },
    { id: "athos-23-6", src: "/art/GreecAthos2023/6.jpg", title: "Greece ~ Mount Athos ~ 2023-2025", category: "Byzantine" },

    // Greece ~ Mount Athos ~ Archangels
    { id: "arch-athos-1", src: "/art/ArchangelsAthos/1.jpg", title: "Greece ~ Mount Athos ~ Archangels", category: "Byzantine" },

    // Greece ~ Mount Athos ~ St.George
    { id: "arch-athos-3", src: "/art/ArchangelsAthos/3.jpg", title: "Greece ~ Mount Athos ~ St.George", category: "Byzantine" },
    { id: "arch-athos-4", src: "/art/ArchangelsAthos/4.jpg", title: "Greece ~ Mount Athos ~ St.George", category: "Byzantine" },
    { id: "arch-athos-6", src: "/art/ArchangelsAthos/6.jpg", title: "Greece ~ Mount Athos ~ St.George", category: "Byzantine" },

    // Greece ~ Mount Athos
    { id: "arch-athos-5", src: "/art/ArchangelsAthos/5.jpg", title: "Greece ~ Mount Athos", category: "Byzantine" },

    // Greece ~ Mount Athos ~ Monastery
    { id: "athos-mon-1", src: "/art/AthosMonastery/1.jpg", title: "Greece ~ Mount Athos ~ Monastery", category: "Byzantine" },
    { id: "athos-mon-2", src: "/art/AthosMonastery/2.jpg", title: "Greece ~ Mount Athos ~ Monastery", category: "Byzantine" },
    { id: "athos-mon-3", src: "/art/AthosMonastery/3.jpg", title: "Greece ~ Mount Athos ~ Monastery", category: "Byzantine" },
    { id: "athos-mon-4", src: "/art/AthosMonastery/4.jpg", title: "Greece ~ Mount Athos ~ Monastery", category: "Byzantine" },
    { id: "athos-mon-5", src: "/art/AthosMonastery/5.jpg", title: "Greece ~ Mount Athos ~ Monastery", category: "Byzantine" },
];
