// ========================================
// GALERIE MODERN ART - SCULPTURI IRAKLIS
// ========================================
// 
// Pentru a EDITA galeria:
// 1. Schimbă "title" pentru a modifica descrierea afișată
// 2. Adaugă noi imagini copiind structura: { id: "...", src: "...", title: "..." }
// 3. Șterge imagini eliminând întregul rând { ... }
// 4. src = calea către imagine (ex: "/art/NumeFolder/nume.jpg")
//

export interface GalleryItem {
    id: string;           // ID unic pentru fiecare imagine
    src: string;          // Calea către imagine
    title: string;        // Titlul/descrierea afișată sub imagine
    width?: number;       // (opțional) lățime
    height?: number;      // (opțional) înălțime
}

export const galleryItems: GalleryItem[] = [

    // ==========================================
    // NEW YORK - Exterior Stone Design (8 imagini)
    // Perioada: 2008-2009
    // Descriere: Design exterior în piatră
    // ==========================================
    {
        id: "ny-1",
        src: "/art/NewYork/1.jpg",
        title: "New York ~ Exterior Stone Design ~ 2008-2009"
    },
    {
        id: "ny-2",
        src: "/art/NewYork/2.jpg",
        title: "New York ~ Exterior Stone Design ~ 2008-2009"
    },
    {
        id: "ny-3",
        src: "/art/NewYork/3.jpg",
        title: "New York ~ Exterior Stone Design ~ 2008-2009"
    },
    {
        id: "ny-4",
        src: "/art/NewYork/4.jpg",
        title: "New York ~ Exterior Stone Design ~ 2008-2009"
    },
    {
        id: "ny-5",
        src: "/art/NewYork/5.jpg",
        title: "New York ~ Exterior Stone Design ~ 2008-2009"
    },
    {
        id: "ny-6",
        src: "/art/NewYork/6.jpg",
        title: "New York ~ Exterior Stone Design ~ 2008-2009"
    },
    {
        id: "ny-7",
        src: "/art/NewYork/7.jpg",
        title: "New York ~ Exterior Stone Design ~ 2008-2009"
    },
    {
        id: "ny-8",
        src: "/art/NewYork/8.jpg",
        title: "New York ~ Exterior Stone Design ~ 2008-2009"
    },

    // ==========================================
    // GEORGIA - Exterior Stone Design (2 imagini)
    // Perioada: 2012-2013
    // Descriere: Design exterior în piatră
    // ==========================================
    {
        id: "geo-ext-1",
        src: "/art/Georgia/1.jpg",
        title: "Georgia ~ Exterior Stone Design ~ 2012-2013"
    },
    {
        id: "geo-ext-2",
        src: "/art/Georgia/2.jpg",
        title: "Georgia ~ Exterior Stone Design ~ 2012-2013"
    },
];
