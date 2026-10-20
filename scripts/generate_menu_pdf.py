"""Generates a placeholder downloadable full-menu PDF matching lib/data/menu.ts.
Run: python3 scripts/generate_menu_pdf.py
"""
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib.enums import TA_CENTER

CHARCOAL = colors.HexColor("#211D1A")
BRONZE = colors.HexColor("#8A6A45")
STONE = colors.HexColor("#6F695E")
IVORY = colors.HexColor("#FAF7F1")

menu = [
    ("Starters", [
        ("Chicken Seekh Kebab", "Hand-minced, char-grilled skewers with mint chutney."),
        ("Dahi Baray", "Lentil dumplings in spiced yogurt with tamarind."),
        ("Vegetable Spring Rolls", "Crisp rolls with a sweet chilli dip."),
        ("Chicken Malai Tikka *", "Creamy marinated tikka finished on the grill."),
    ]),
    ("Main Course", [
        ("Chicken Karahi", "Tomato-based karahi finished with ginger and green chillies."),
        ("Mutton Biryani *", "Layered basmati rice with slow-cooked mutton."),
        ("Beef Nihari", "Slow-braised beef in a rich, spiced gravy."),
        ("Vegetable Handi", "Seasonal vegetables in a light, home-style gravy."),
    ]),
    ("BBQ", [
        ("Beef Boti", "Marinated cubes grilled to order."),
        ("Chicken Tikka *", "Classic tandoor-style tikka."),
        ("Reshmi Kebab", "Silky, mildly spiced chicken kebabs."),
    ]),
    ("Rice", [
        ("Chicken Pulao", "Fragrant rice cooked in seasoned chicken stock."),
        ("Vegetable Biryani", "Layered rice with mixed seasonal vegetables."),
        ("Plain Steamed Rice", "A simple accompaniment for richer curries."),
    ]),
    ("Desserts", [
        ("Gulab Jamun", "Soft milk dumplings in rose-cardamom syrup."),
        ("Kheer", "Slow-cooked rice pudding with pistachio."),
        ("Live Dessert Counter *", "Chef-attended counter with seasonal options."),
    ]),
    ("Beverages", [
        ("Fresh Lime Soda", "Classic sparkling lime refresher."),
        ("Mixed Fruit Mocktail", "Seasonal fruit blend, served chilled."),
        ("Rooh Afza Sharbat", "A traditional rose-flavoured cooler."),
    ]),
    ("Tea", [
        ("Kashmiri Chai", "Pink tea served with crushed nuts."),
        ("Doodh Patti", "Classic milk tea, brewed strong."),
        ("Black Coffee", "Freshly brewed, served on request."),
    ]),
    ("Special Menu", [
        ("Live Chaat Counter *", "Interactive counter with regional chaat varieties."),
        ("Continental Station", "A rotating selection of continental dishes."),
        ("Regional Specialities", "Rotating dishes representing regional Pakistani cuisine."),
    ]),
]

doc = SimpleDocTemplate(
    "public/downloads/marque-full-menu.pdf",
    pagesize=A4,
    topMargin=28 * mm,
    bottomMargin=22 * mm,
    leftMargin=22 * mm,
    rightMargin=22 * mm,
    title="MARQUE — Full Menu",
    author="MARQUE",
)

title_style = ParagraphStyle("Title", fontName="Helvetica-Bold", fontSize=26, textColor=CHARCOAL, alignment=TA_CENTER, spaceAfter=4)
subtitle_style = ParagraphStyle("Subtitle", fontName="Helvetica", fontSize=10, textColor=STONE, alignment=TA_CENTER, spaceAfter=18)
category_style = ParagraphStyle("Category", fontName="Helvetica-Bold", fontSize=14, textColor=BRONZE, spaceBefore=16, spaceAfter=8, letterSpacing=1)
item_name_style = ParagraphStyle("ItemName", fontName="Helvetica-Bold", fontSize=10.5, textColor=CHARCOAL, spaceAfter=1)
item_desc_style = ParagraphStyle("ItemDesc", fontName="Helvetica", fontSize=9.5, textColor=STONE, spaceAfter=8, leading=13)
note_style = ParagraphStyle("Note", fontName="Helvetica-Oblique", fontSize=8.5, textColor=STONE, alignment=TA_CENTER, spaceBefore=20)

story = []
story.append(Paragraph("MARQUE", title_style))
story.append(Paragraph("FULL MENU &nbsp;&bull;&nbsp; SAMPLE SELECTIONS ACROSS ALL PACKAGES", subtitle_style))
story.append(HRFlowable(width="100%", thickness=0.75, color=BRONZE, spaceAfter=10))

for i, (category, items) in enumerate(menu):
    if i > 0 and i % 3 == 0:
        pass
    story.append(Paragraph(category.upper(), category_style))
    rows = []
    for name, desc in items:
        rows.append([Paragraph(name, item_name_style)])
        rows.append([Paragraph(desc, item_desc_style)])
    for name, desc in items:
        story.append(Paragraph(name, item_name_style))
        story.append(Paragraph(desc, item_desc_style))

story.append(Spacer(1, 10))
story.append(HRFlowable(width="100%", thickness=0.5, color=STONE, spaceAfter=8))
story.append(Paragraph("* Signature dish &nbsp;&bull;&nbsp; Menus vary by package and can be customized on request.", note_style))
story.append(Paragraph("This is a sample menu for planning purposes. Final selections are confirmed with your events coordinator.", note_style))

doc.build(story)
print("PDF generated at public/downloads/marque-full-menu.pdf")
