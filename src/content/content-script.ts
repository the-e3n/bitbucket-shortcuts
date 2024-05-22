function getElementByXpath(path: string) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

function assignBtn() {
    const nextBtn: HTMLButtonElement | null = document.querySelector('button[aria-label="Next file"]');
    const prevBtn: HTMLButtonElement | null = document.querySelector('button[aria-label="Previous file"]');
    const viewBtn: Node | null = document.querySelector('input[name="controlled-checkbox"]');
    const role = document.activeElement?.getAttribute('role');
    console.debug({ nextBtn, prevBtn, viewBtn, role });
    return { nextBtn, prevBtn, viewBtn, role };
}

document.addEventListener('keydown', (e) => {
    const { nextBtn, prevBtn, viewBtn, role } = assignBtn();
    if ((e.key === 'v' || e.code === 'KeyV') && role !== 'textbox') {
        (viewBtn as HTMLInputElement)?.click();
    } else if (e.code === 'ArrowRight') {
        nextBtn?.click();
    } else if (e.code === 'ArrowLeft') {
        prevBtn?.click();
    }
});
