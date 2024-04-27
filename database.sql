CREATE TABLE "gallery" (
  "id" SERIAL PRIMARY KEY,
  "url" VARCHAR,
  "title" VARCHAR,
  "description" TEXT,
  "likes" INTEGER DEFAULT 0,
  "showDescription" BOOLEAN DEFAULT FALSE 
);

INSERT INTO "gallery" 
("url", "title", "description")
VALUES
('images/goat_small.jpg', 'Goat!', 'Photo of a goat taken at Glacier National Park.'),
('images/market.JPG', 'Market in Guatemala!', 'Photo of an open air market in Guatemala.'),
('images/portugal.jpg', 'Portugal!', 'Photo of a sunset taken on the Azores islands in Portugal.'),
('images/pretzel.jpeg', 'Pretzel!', 'Photo of a delicious German soft pretzel.'),
('images/skiing.jpg', 'XC Skiing!', 'Photo of Kristin skiing in the Kortelopet ski race in Hayward, WI.'),
('images/tikal.JPG', 'Tikal!', 'Photo of a temple in Tikal.');
  