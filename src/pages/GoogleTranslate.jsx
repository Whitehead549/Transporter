import { useEffect } from "react";

const GoogleTranslate = () => {
    useEffect(() => {
        const scriptId = "google-translate-script";

        window.googleTranslateElementInit = () => {
            new window.google.translate.TranslateElement(
                { pageLanguage: "en" },
                "google_translate_element"
            );
        };

        if (!document.getElementById(scriptId)) {
            const script = document.createElement("script");
            script.id = scriptId;
            script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
            script.async = true;
            document.body.appendChild(script);
        } else {
            if (window.google && window.google.translate) {
                window.googleTranslateElementInit();
            }
        }

        const detectLanguageChange = () => {
            const selectElement = document.querySelector(".goog-te-combo");
            if (selectElement) {
                selectElement.addEventListener("change", (event) => {
                    console.log("Selected Language:", event.target.value);
                });
            }
        };

        const detectBanner = () => {
            return !!document.querySelector(".goog-te-banner-frame");
        };

        const observer = new MutationObserver(() => {
            detectLanguageChange();
            if (detectBanner()) {
                console.log("Google Translate banner detected");
            }
        });

        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div>
           <style>{`
    .goog-te-combo {
        padding: 8px 2px 8px 8px;
        border-radius: 4px;
        border: 2px solid #091242;
        background-color: #ffffff;
        color: #091242;
        font-size: 14px;
        cursor: pointer;
        transition: all 0.3s ease;
        z-index: 9999;
        position: fixed;
        top: 8px;
        left: 40rem;
    }
    .goog-te-menu-value span {
        color: #091242 !important;
        font-weight: bold;
    }
    .goog-te-menu2 {
        border: 1px solid #ddd;
        border-radius: 4px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        z-index: 9999;
        position: fixed;
        top: 40px;
        right: 5px;
    }
    .goog-te-banner-frame {
        z-index: 9999 !important;
    }

    @media (max-width: 768px) {
    .goog-te-combo {
       
        left: 2rem;
        font-size: 12px;
        padding: 3px 2px;
        border-width: 1.5px;
        padding: 8px 4px 4px 8px;
    }

    @media (max-width: 480px) {
    .goog-te-combo {
        left: 7.5rem;
        top: 12px;
        font-size: 12px;
        padding: 5px 0px 5px 16px;
    }
    }

     @media (max-width: 428px) {
    .goog-te-combo {
        left: 8rem;
        top: 12px;
        font-size: 12px;
        padding: 5px 0px 5px 16px;
    }
    }

    @media (max-width: 375px) {
        .goog-te-combo {
            left: 6.4rem;
            top: 10px;
            font-size: 12px;
            padding: 5px 0px 5px 16px;
        }

    }
    
    @media (max-width: 320px) {
    .goog-te-combo {
        left: 4.8rem;
        top: 10px;
        font-size: 12px;
        padding: 5px 0px 5px 16px;
    }

}
        
}
`}</style>
            <div id="google_translate_element"></div>
        </div>
    );
};

export default GoogleTranslate;