<script setup lang="ts">
import FAQItem from './FAQItem.vue'
import FramaTitle from './FramaTitle.vue'
</script>

<style scoped>
.first-title {
  margin-top: -2rem !important;
}
</style>

<template>
  <FramaTitle class="first-title" level="2">Questions générales</FramaTitle>
  <div class="mt-4 accordion" id="questions-generales">
    <FAQItem parentId="questions-generales">
      <template #title>Je veux en savoir plus sur Framasoft.</template>
      <template #content>
        <p>
          Framasoft a contribué à tellement d’actions depuis la création du collectif en 2002 (et de
          l’association en 2004) que c’est compliqué d’être à la fois exhaustif et succinct&nbsp;!
          Vous pouvez cependant consulter&nbsp;:
        </p>
        <ul>
          <li>
            Notre page de
            <a href="https://framasoft.org/fr/association"
              >présentation de l’association Framasoft</a
            >
            (chiffres clés, données administratives, rapports d’activité et financiers…)&nbsp;;
          </li>
          <li>
            Notre <a href="https://framasoft.org/">site web Framasoft.org</a> (actions principales
            de l’année en cours)&nbsp;;
          </li>
          <li>
            La <a href="https://fr.wikipedia.org/wiki/Framasoft">page wikipédia</a> consacrée à
            Framasoft (sur laquelle nous n’intervenons pas).
          </li>
        </ul>
      </template>
    </FAQItem>
    <FAQItem parentId="questions-generales">
      <template #title>Puis-je adhérer à l’association Framasoft&nbsp;?</template>
      <template #content>
        <p>Non&nbsp;: Framasoft est une association par cooptation.</p>
        <p>
          En effet, nous estimons qu’il n’est pas nécessaire d’adhérer à Framasoft pour venir
          contribuer à nos actions. N’importe qui peut venir nous prêter main forte sur la plupart
          de nos projets (une bonne manière de commencer peut être de vous présenter sur
          <a href="https://framacolibri.org">le forum des Framacolibris</a>, ou de venir à un
          <a href="https://contribateliers.org">Contribatelier</a>), et nous faisons de notre mieux
          pour apprendre à accueillir les bonnes volontés.
        </p>
        <p>
          La cooptation des membres nous permet de créer un noyau solide pour entretenir la
          structure juridique (l’association loi 1901) qui permet à toutes nos actions d’exister,
          tout en nous assurant que nous partageons des valeurs, des méthodes (et un certain sens de
          l’auto-dérision).
        </p>
        <p>
          Celles et ceux qui veulent nous soutenir sans s’impliquer en bénévolat peuvent aussi nous
          <a href="https://soutenir.framasoft.org">faire un don</a>, tout simplement.
        </p>
      </template>
    </FAQItem>
    <FAQItem parentId="questions-generales">
      <template #title
        >Il ne m’est pas possible de faire un don récurrent, mais je souhaite soutenir Framasoft,
        que puis-je faire&nbsp;?</template
      >
      <template #content>
        <p>Merci pour votre soutien et pour votre engagement.</p>
        <p>
          Sachez tout d’abord que vous pouvez nous faire un don ponctuel directement depuis la page
          <a href="https://soutenir.framasoft.org">https://soutenir.framasoft.org</a>.
        </p>
        <p>
          Framasoft recherche de bonnes volontés, que vous ayez ou pas beaucoup de temps et quelles
          que soient vos compétences, vous pouvez probablement nous aider&nbsp;: venez en discuter
          sur
          <a href="https://framacolibri.org">le forum des Framacolibris</a>, ou, si vous le pouvez,
          venez participer à un <a href="https://contribateliers.org">Contribatelier</a>.
        </p>
        <p>
          Enfin, le simple fait de promouvoir nos valeurs et nos outils auprès d’autres personnes,
          de présenter ce que nous proposons autour de vous, est déjà en soi une excellente manière
          de nous soutenir.
        </p>
      </template>
    </FAQItem>
    <FAQItem parentId="questions-generales">
      <template #title
        >Framasoft serait-elle intéressée par un partenariat d’influenceuse&nbsp;? Un échange de
        liens&nbsp;? Un placement de produit ou de la publi information&nbsp;?</template
      >
      <template #content>
        <p>Très clairement&nbsp;: NON.</p>
        <p>
          Nous pensons que les valeurs d’éducation populaire, de communs informationnels et
          d’hygiène numérique que nous défendons chaque jour sont incompatibles avec le système
          publicitaire.
        </p>
        <p>
          Nous ne voyons aucun intérêt à afficher et diffuser du contenu publicitaire&nbsp;: nous
          pensons que nos internets, nos attentions, nos cerveaux à tous et toutes (vous comme nous)
          valent mieux que ça.
        </p>
      </template>
    </FAQItem>
  </div>
  <FramaTitle class="mt-5" level="2">Questions sur votre don</FramaTitle>
  <div class="mt-4 accordion" id="questions-sur-votre-don">
    <FAQItem parentId="questions-sur-votre-don">
      <template #title
        >J’ai fait un don, mais je n’ai pas encore d’attestation pour bénéficier de la déduction
        fiscale.</template
      >
      <template #content
        ><p>
          C’est normal&nbsp;: nous envoyons tous les reçus fiscaux d’une année aux alentours de
          mars/avril de l’année suivante, avant la période de déclaration des impôts.
        </p>
        <p>
          Si toutefois vous souhaitez le recevoir plus rapidement vous pouvez vous rendre dans votre
          espace donateur·rice<br />
          ➡️ <a href="https://recu-dons.framasoft.org">https://recu-dons.framasoft.org</a> <br />
          Vous pourrez y télécharger votre reçu dès qu’il aura été ajouté à notre logiciel de
          comptabilité (au plus tard 2 mois après la date du don ; tout dépend aussi du moyen de
          paiement utilisé).
        </p>
        <p>
          Si vous n’avez toujours pas reçu au moment de remplir la déclaration et qu’il n’est pas
          présent dans votre espace, nous pouvons vous l’envoyer manuellement. Pour cela, vous
          pouvez nous contacter via
          <a href="https://contact.framasoft.org/#soutenir">le formulaire</a>.
        </p>
      </template>
    </FAQItem>
    <FAQItem parentId="questions-sur-votre-don">
      <template #title
        >J’ai fait un don mensuel mais je me suis trompé dans le montant ou je souhaiterais le
        modifier.</template
      >
      <template #content
        ><p>Tout d’abord merci pour votre générosité.</p>
        <p>
          Pour <strong>les dons récurrents effectués par Paypal et par virement</strong>, vous avez
          entièrement la main.
        </p>
        <p>
          En revanche, pour <strong>les dons récurrents par carte bancaire</strong>, nous ne pouvons
          pas modifier la somme pour les prochains prélèvements mais nous pouvons les stopper.
        </p>
        <p>
          Pour cela, <a href="https://contact.framasoft.org/#soutenir">contactez-nous</a>. Nous vous
          inviterons ensuite, si vous le souhaitez, à renouveler votre don le mois suivant avec le
          bon montant.
        </p>
      </template>
    </FAQItem>
    <FAQItem parentId="questions-sur-votre-don">
      <template #title
        >Dons alternatifs&nbsp;: puis-je faire un don en Bitcoin ou via Lilo, Flattr, Tipeee,
        Benevity etc…&nbsp;?</template
      >
      <template #content>
        <p>
          Ce genre d’initiatives peut-être honorable, mais pour notre association elle induit une
          charge comptable (nombreuses écritures, vérifications, etc.) qui se traduit de fait en
          coûts de temps salarié et/ou d’expertises comptables supplémentaires.
        </p>
        <p>
          Malheureusement, la plupart du temps, les dons reçus par ces biais ne parviendraient pas à
          couvrir les dépenses supplémentaires engagées pour les enregistrer comptablement.
        </p>
        <p>
          Voilà pourquoi nous préférons nous en tenir
          <a href="https://soutenir.framasoft.org">au système de dons que nous proposons</a>, qui a
          de plus l’avantage de pouvoir offrir une déduction fiscale aux contribuables français.
        </p>
      </template>
    </FAQItem>
    <FAQItem parentId="questions-sur-votre-don">
      <template #title
        >Je fais actuellement un don récurrent mais ma carte bleue a expiré, comment
        faire&nbsp;?</template
      >
      <template #content>
        Normalement, votre don récurrent sera automatiquement interrompu lorsque votre carte aura
        été désactivée.
        <p>
          Pour mettre à jour vos coordonnées bancaires auprès de Framasoft, veuillez remplir le
          formulaire sur la page
          <a href="https://soutenir.framasoft.org">https://soutenir.framasoft.org</a> comme s’il
          s’agissait de votre premier don.
        </p>
      </template>
    </FAQItem>
  </div>
</template>
