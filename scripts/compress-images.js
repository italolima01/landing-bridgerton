const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const INPUT_DIR = path.join(__dirname, '../public/assets/img');
const OUTPUT_DIR = path.join(__dirname, '../public/assets/img');

// Imagens pesadas que precisam de compressão (ordenadas por tamanho)
const imagensParaComprimir = [
  { entrada: 'textile-material-texture.jpg', saida: 'textile-material-texture.webp', qualidade: 70 },
  { entrada: 'writing-letter.jpg',           saida: 'writing-letter.webp',           qualidade: 75 },
  { entrada: 'erika-integrantes.jpg',         saida: 'erika-integrantes.webp',         qualidade: 80 },
  { entrada: 'posicionamento.jpg',            saida: 'posicionamento.webp',            qualidade: 80 },
  { entrada: 'erika-sousa.jpg',               saida: 'erika-sousa.webp',               qualidade: 60 },
  { entrada: 'carta fundo.png',               saida: 'carta-fundo.webp',               qualidade: 80 },
  { entrada: 'diamante-bg.png',               saida: 'diamante-bg.webp',               qualidade: 80 },
  { entrada: 'diamante.png',                  saida: 'diamante.webp',                  qualidade: 80 },
  { entrada: 'mask-invitation.jpg',           saida: 'mask-invitation.webp',           qualidade: 80 },
  { entrada: 'vertical-shot-red-textile-it-is-great-background.jpg', saida: 'vertical-shot-red-textile.webp', qualidade: 75 },
  { entrada: 'dream-shadow.jpg',              saida: 'dream-shadow.webp',              qualidade: 80 },
  { entrada: 'fios-realistas.jpeg',           saida: 'fios-realistas.webp',           qualidade: 80 },
  { entrada: 'aquarelle-lips.jpeg',           saida: 'aquarelle-lips.webp',           qualidade: 80 },
  { entrada: 'brow-lamination.jpg',           saida: 'brow-lamination.webp',           qualidade: 80 },
  { entrada: 'marketing.JPG',                 saida: 'marketing.webp',                 qualidade: 80 },
  { entrada: 'feedback-1.PNG',                saida: 'feedback-1.webp',                qualidade: 70 },
  { entrada: 'feedback-2.PNG',                saida: 'feedback-2.webp',                qualidade: 70 },
  { entrada: 'feedback-3.jpeg',               saida: 'feedback-3.webp',               qualidade: 70 },
  { entrada: 'feedback-4.jpeg',               saida: 'feedback-4.webp',               qualidade: 70 },
  { entrada: 'feedback-5.jpeg',               saida: 'feedback-5.webp',               qualidade: 70 },
  { entrada: 'feedback-6.jpeg',               saida: 'feedback-6.webp',               qualidade: 70 },
  { entrada: 'feedback-7.jpeg',               saida: 'feedback-7.webp',               qualidade: 70 },
  { entrada: 'feedback-8.jpeg',               saida: 'feedback-8.webp',               qualidade: 70 },
];

function tamanhokb(filepath) {
  try {
    return (fs.statSync(filepath).size / 1024).toFixed(1);
  } catch {
    return '?';
  }
}

async function comprimirImagens() {
  console.log('\n🚀 Iniciando compressão de imagens...\n');

  for (const img of imagensParaComprimir) {
    const caminhoEntrada = path.join(INPUT_DIR, img.entrada);
    const caminhoSaida   = path.join(OUTPUT_DIR, img.saida);

    if (!fs.existsSync(caminhoEntrada)) {
      console.warn(`⚠️  Arquivo não encontrado: ${img.entrada}`);
      continue;
    }

    try {
      const antesKB = tamanhokb(caminhoEntrada);

      await sharp(caminhoEntrada)
        .webp({ quality: img.qualidade, effort: 6 })
        .toFile(caminhoSaida);

      const depoisKB = tamanhokb(caminhoSaida);
      const reducao  = (((antesKB - depoisKB) / antesKB) * 100).toFixed(1);

      console.log(`✅ ${img.entrada}`);
      console.log(`   ${antesKB} KB → ${depoisKB} KB  (↓${reducao}%)\n`);
    } catch (err) {
      console.error(`❌ Erro ao comprimir ${img.entrada}:`, err.message);
    }
  }

  console.log('✅ Compressão concluída!');
}

comprimirImagens();
