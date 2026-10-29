<template>
  <div class="">
    <div class="" id="dowloadgggreement">
      <div
        class=" bg-light"
        style="
          margin-top: 100px;
          border: 2px solid black;
          box-shadow: 8px 9px 8px 9px purple;
        "
      >
        <div class="">
          <h2
            style="
              font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial,
                sans-serif;
              height: 60px;
              padding-top: 10px;
              font-size: 30px;
            "
            class="btn btn-info text-light mt-4"
          >
            DELIVERY NOTE
          </h2>
        </div>
        <hr />

        <section id="section1">
          <div class="">
            <h4 style="font-family: 'Times New Roman', Times, serif">
              Section 1: Parties
            </h4>
            <p>
              This Lease Agreement (the "Agreement") is made and entered into
              between:
            </p>
            <div class="row">
              <div class="col-md-6">
                <h4>Landlord:</h4>
                <p></p>
                <p>Tel :</p>
              </div>
              <div class="col-md-6">
                <h4>Tenant:</h4>
                <p></p>
                <p>Tel:</p>
              </div>
            </div>
          </div>
        </section>
        <hr />

        <section id="section2" class="mt-5">
          <div class="">
            <h4 style="font-family: 'Times New Roman', Times, serif">
              Section 2: Property
            </h4>
            <p>
              The Landlord agrees to lease the house unit with the following
              address:
            </p>
            <p class=""><b></b></p>

            to the afore mentioned person( tenant);
          </div>
        </section>
        <hr />

        <section id="section3" class="mt-5">
          <div class="">
            <h4 style="font-family: 'Times New Roman', Times, serif">
              Section 3: Lease Term
            </h4>
            <p>The Lease Term shall begin on and end on</p>
          </div>
        </section>
        <hr />
        <section id="section4" class="mt-5">
          <div class="">
            <h4 style="font-family: 'Times New Roman', Times, serif">
              Section 4: Rent
            </h4>
            <p>The Tenant agrees to pay the Landlord the following rent:</p>
            <p>serial Numbers Attached</p>
          </div>
        </section>
        <hr />
        <section id="section5" class="mt-5">
          <div class="">
            <h4 style="font-family: 'Times New Roman', Times, serif">
              Section 5: Security Deposit
            </h4>
            <p>
              The Tenant agrees to provide a security deposit of Ksh. Payhouse
              Limited Company.
            </p>
          </div>
        </section>
        <hr />
        <section id="section6" class="mt-5">
          <div class="">
            <h4 style="font-family: 'Times New Roman', Times, serif">
              Section 6: Maintenance and Repairs
            </h4>
            <p>
              The Tenant shall be responsible for maintaining the property and
              making necessary repairs for any damages caused by their
              negligence.
            </p>
          </div>
        </section>
        <hr />
        <section id="section7" class="mt-5">
          <div class="">
            <h4 style="font-family: 'Times New Roman', Times, serif">
              Section 7: Termination
            </h4>
            <p>
              Either party may terminate this Agreement by providing written
              notice of 30 days before the intended vacation of the house unit.
            </p>
          </div>
        </section>
        <hr />
        <section id="section8" class="mt-5">
          <div class="">
            <h4 style="font-family: 'Times New Roman', Times, serif">
              Section 8: Governing Law
            </h4>
            <p>
              This Agreement shall be governed by and construed in accordance
              with the laws of the constitution of the Republic Of Kenya
              regarding the same.
            </p>
          </div>
        </section>
        <hr />
        <section id="section9" class="mt-5">
          <div class="">
            <h4 style="font-family: 'Times New Roman', Times, serif">
              Section 9: Entire Agreement
            </h4>
            <p>
              This Agreement constitutes the entire agreement between the
              parties and supersedes all prior negotiations, representations, or
              agreements, whether written or oral.
            </p>
          </div>
        </section>
        <hr />
        <br />
        <br />
        <section id="section10" class="">
          <div class="">
            <h4 style="font-family: 'Times New Roman', Times, serif">
              Section 10: Signatures
            </h4>
            <div class="row mt-5  w-75 mx-1">
              <div class="col-md-6">
                <h4>Landlord:</h4>
                <p>__________________________________________</p>
                <p>Date: ____________________________________</p>
              </div>
              <div class="col-md-6">
                <h4>Tenant:</h4>
                <p>_______________________________________</p>
                <p>Date: ____________________________________</p>
              </div>
            </div>
          </div>
        </section>
        <hr />
        <di class="rounded">
          <small class="text-dark">
            kindly fill in the right spaces and scan and keep send the file to
            your caretaker/agent or landlord email</small
          >
        </di>
        <section
          id="section9"
          class="mt-5 bg-secondary w-75 mx-5 text-center text-light"
          style="border: 2px solid black; border-radius: 30px"
        >
          <div class="container" style="font-size: 10px">
            Phone: 254721233204 &nbsp;&nbsp;&nbsp; Email:
            livelyhomes00@gmail.com &nbsp;&nbsp; copyrights@livelyhomes2023
          </div>
        </section>
      </div>
    </div>

    <div class="container mt-5">
      <button @click.prevent="generatePdf()" class="btn btn-primary">
        Download Aggreement
      </button>
    </div>
  </div>
</template>

<script>
import html2pdf from "html2pdf.js";
export default {
  name: "GenerateDeliveryNote",
  data() {
    return {
      tenantid: "",
      aggreementbody: {},
    };
  },
  methods: {
    generatePdf() {
      const val = Math.floor(10000 + Math.random() * 90000);
      var number =
        Math.floor(1000 + Math.random() * 9000) +
        Math.floor(10000 + Math.random() * 90000);
      number = number + 1;
      let pdfName = "livelyHomes_";

      const element = document.getElementById("dowloadgggreement");
      const opt = {
        margin: 0.5,
        filename: pdfName + val + number + ".pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      };

      html2pdf().set(opt).from(element).save();

      this.spinner = false;
    },
  },

  created() {},
};
</script>

<style lang="scss" scoped></style>
