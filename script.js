document.addEventListener('DOMContentLoaded', function () {
    const dropdownMenus = document.querySelectorAll('.dropdown')

    // Add event listeners to each dropdown menu
    dropdownMenus.forEach((dropdown) => {
        dropdown.addEventListener('mouseenter', function () {
            this.querySelector('.dropdown-menu').style.display = 'flex'
            this.querySelector('.nav-link').style.textDecoration = 'underline'
        })

        dropdown.addEventListener('mouseleave', function () {
            this.querySelector('.dropdown-menu').style.display = 'none'
            this.querySelector('.nav-link').style.textDecoration = 'none'
        })

        // Close dropdown with the Escape key
        dropdown.addEventListener('keydown', function (event) {
            if (event.key === 'Escape') {
                this.querySelector('.dropdown-menu').style.display = 'none'
            }
        })
    })

    const navButtons = document.querySelectorAll('.navigation-link')
    navButtons.forEach((button) => {
        button.addEventListener('click', function () {
            navButtons.forEach((btn) => {
                btn.style.backgroundColor = '#fdfcf7'
                btn.style.color = '#4a7789'
            })
            button.style.backgroundColor = '#4a7789'
            button.style.color = '#fdfcf7'
        })
    })

    document.getElementById('redeem-form').addEventListener('submit', function (event) {
        event.preventDefault()
        
        // Get the input values
        const redemptionCodeValue = document.getElementById('redemptionCode').value
        const emailAddressValue = document.getElementById('emailAddress').value
        
        // Clear previous error messages
        document.getElementById('redemptionCodeError').innerHTML = ''
        document.getElementById('emailAddressError').innerHTML = ''
        document.getElementById('redemptionCode').style.borderColor = '#80a4b3'
        document.getElementById('emailAddress').style.borderColor = '#80a4b3'

        document.getElementById('redemptionCode').addEventListener('click', function(event) {
            document.getElementById('redemptionCodeError').innerHTML = ''
            document.getElementById('redemptionCode').style.borderColor = '#80a4b3'
        })
        document.getElementById('emailAddress').addEventListener('click', function(event) {
            document.getElementById('emailAddressError').innerHTML = ''
            document.getElementById('emailAddress').style.borderColor = '#80a4b3'
        })

        // Check if the input fields are empty
        if (redemptionCodeValue.trim() === '' && emailAddressValue.trim() !== '') {
            showError('redemptionCode', 'Please enter your redemption code')
        } else if (emailAddressValue.trim() === '' && redemptionCodeValue.trim() !== '') {
            showError('emailAddress', 'Please enter your email address')
        } else if (emailAddressValue.trim() === '' && redemptionCodeValue.trim() === '') {
            showError('redemptionCode', 'Please enter your redemption code')
            showError('emailAddress', 'Please enter your email address')
        }
      
      })

      function showError(inputId, errorMessage) {
        const inputElement = document.getElementById(inputId)
        const errorElement = document.getElementById(`${inputId}Error`)
        inputElement.style.borderColor = '#ad502e'
        errorElement.innerHTML = errorMessage
      }
})
